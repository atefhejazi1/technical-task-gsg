import { Link } from 'react-router';
import Layout from '../components/common/Layout';

const NotFound: React.FC = () => {
    return (
        <Layout>
            <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
                    <p className="text-2xl text-gray-300 mb-8">Page Not Found</p>
                    <p className="text-gray-400 mb-8">
                        Sorry, the page you're looking for doesn't exist in the multiverse.
                    </p>
                    <Link
                        to="/"
                        className="bg-green-500 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;
