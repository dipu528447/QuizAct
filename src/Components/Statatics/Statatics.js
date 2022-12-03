import React from 'react';
import NavBar from './../NavBar/NavBar';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statatics = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <LineChart className='mx-auto my-5' width={300} height={200} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>

            <h4 className='text-center'>Total Questions in Each Topic</h4>
        </div>
    );
};

export default Statatics;