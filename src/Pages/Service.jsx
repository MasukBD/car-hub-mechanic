/* eslint-disable no-unused-vars */
import ServiceCard from './Home/ServiceCard';
import useTitle from '../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const services = useLoaderData();

    useTitle('Service');
    return (
        <div className='my-10'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Our Services Area</h2>
                <p className='w-full lg:w-1/2 mx-auto space-y-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;