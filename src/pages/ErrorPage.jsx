import errorimg from '../assets/404.png'

const ErrorPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <img src={errorimg} alt=""  className='w-3/5'/>
        </div>
    );
};

export default ErrorPage;