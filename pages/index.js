import Layout from '../components/Layout';
import Switches from './switches'
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';

const Index = () => (
    <Layout>
        <Header active={["0px", "0px", "0px", "0px"]} />
        <style jsx global>{`
            body { 
            background: white;
            }
        `}</style>
    </Layout>
);

export default Index;
