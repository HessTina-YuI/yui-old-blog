import React, { Component } from 'react';
import axios from "axios";
import { IoLogoGithub } from "react-icons/io5";
import style from './index.module.less';

class Github extends Component {

    state = {
        description: '',
        imgUrl: '',
        githubName: ''
    };

    componentDidMount() {
        const {url} = this.props;
        const path = url.replace('https://github.com/', '');

        axios({
            method: 'get',
            url: `https://api.github.com/repos/${path}`,
            headers: {
                'Accept': 'application/vnd.github.inertia-preview+json'
            }
        }).then((res) => {
            console.log(res);
            this.setState({
                description: res.data.description,
                imgUrl: res.data.owner.avatar_url,
                githubName: res.data.full_name
            });
        }).catch((err) => {
        });
    }

    render() {
        const {url} = this.props;
        const {description, githubName, imgUrl} = this.state;

        return (
            <div className={style.githubContainer}>
                <a href={url} target='_blank'>
                    <div className={style.githubContent}>
                        <h4 className={style.name}>{githubName}</h4>
                        <p className={style.description}>{description}</p>
                        <div className={style.path}>
                            <IoLogoGithub className={style.icon}/>
                            <p>{url}</p>
                        </div>
                    </div>
                    <img className={style.githubImage} src={imgUrl} alt={githubName}/>
                </a>
            </div>
        );
    }
}

export default Github;