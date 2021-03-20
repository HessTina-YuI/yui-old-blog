import { resetServerContext } from 'react-beautiful-dnd';
import dynamic from "next/dynamic";
import Loader from '../components/Loader';

require('../styles/global.less');

const ExplainDynamic = dynamic(
    () => import('../components/Explain'),
    {
        loading: ()=> <Loader/>
    }
);

const Index = (props) => {
    return (
        <main>
            <ExplainDynamic/>
        </main>
    );
};

export const getServerSideProps = async () => {
    resetServerContext();

    return {props: {}};
};

export default Index;