import React, { Component } from 'react';
import { Skeleton } from 'antd';
import cls from 'classnames';
import { IoLogoGithub } from "react-icons/io5";
import yaml from '../../../config/token.yml'
import style from './index.module.less';

const LOAD_TIME_MILLISECOND = 2000;

class Github extends Component {

    state = {
        isLoading: true,
        loadingTime: 0,
        description: '',
        imgUrl: '',
        githubName: ''
    };

    componentDidMount() {
        const {url} = this.props;
        const path = url.replace('https://github.com/', '');

        const header = new Headers();
        header.append('Accept', 'application/vnd.github.inertia-preview+json');
        if (yaml.github) {
            header.append('Authorization', `token ${yaml.github}`);
        }

        setTimeout(() => {
            this.setState({loadingTime: LOAD_TIME_MILLISECOND});
        }, LOAD_TIME_MILLISECOND);

        fetch(`https://api.github.com/repos/${path}`,
            {
                method: 'GET',
                headers: header,
                cache: 'force-cache'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`${path} 请求失败`);
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                    isLoading: false,
                    description: data.description,
                    imgUrl: data.owner.avatar_url,
                    githubName: data.full_name
                });
            })
            .catch((error) => console.error(error));
    }

    render() {
        const {url} = this.props;
        const {isLoading, loadingTime, description, githubName, imgUrl} = this.state;

        return (
            <Skeleton active round loading={isLoading || loadingTime < LOAD_TIME_MILLISECOND}>
                <div className={style.githubContainer}>
                    <a href={url} target='_blank'>
                        <div className={style.githubContent}>
                            <h4 className={cls('ignoreToc', style.name)}>{githubName}</h4>
                            <p className={style.description}>{description}</p>
                            <div className={style.path}>
                                <IoLogoGithub className={style.icon}/>
                                <p>{url}</p>
                            </div>
                        </div>
                        <img className={style.githubImage} src={imgUrl} alt={githubName}/>
                    </a>
                </div>
            </Skeleton>);
    }
}

export default Github;