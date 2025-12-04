import Hero from '../components/sections/Hero'
import Characters from '../components/sections/Characters'
import Locations from '../components/sections/Locations'
import Episodes from '../components/sections/Episodes'
import Layout from '../components/common/Layout'

const Home = () => {
    return (
        <>
            <Layout >
                <Hero />
                <Characters />
                <Locations />
                <Episodes />
            </Layout>
        </>
    )
}

export default Home