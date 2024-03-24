import {CircleLoader} from 'react-spinners'
const Loader = () => {
    return (
        <main className='flex items-center justify-center flex-col min-h-[calc(100vh-116px)]'>
<CircleLoader size={100} color='#e85d04'/>
        </main>
    );
};

export default Loader;