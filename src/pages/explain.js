import { resetServerContext } from 'react-beautiful-dnd';
import Home from '../components/Home';
import Explain from "../components/Explain";

require('../styles/global.less');

const Index = (props) => {
    return (
        <main>
            <Explain/>
        </main>
    );
};

export const getServerSideProps = async () => {
    resetServerContext();

    return {props: {}};
};

export default Index;