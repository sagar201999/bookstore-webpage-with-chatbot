import React, { useState, useContext } from 'react';
import '../App.css';
import { AppContext, AppContext2 } from './apicontext';

const Demo = () => {


    const [count, setCount] = useState(1);
    const [multi, setMulti] = useState(count);


    const numreic = () => {
        setCount(count + 1);
        setMulti((count + 1) * 2);
    }


    const [userInput, setUserInput] = useState('');
    const [displayList, setDisplayList] = useState([]);

    const getData = (e) => {
        const value = e.target.value;
        setUserInput(value);
    }

    const click = async () => {
        if (userInput.trim() !== '') {
            const updatedDisplayList = [...displayList, userInput];
            setDisplayList(updatedDisplayList);
            setUserInput('');
        }
    };


    const getAppContextData = useContext(AppContext)
    const getAppContextData2 = useContext(AppContext2)


    // useEffect(() => {
    //     console.log(getAppContextData);

    // }, [getAppContextData])

    return (
        <>
            <div className='d-flex justify-content-center'>

                <div className='w-50'>
                    <button onClick={numreic} >change</button>
                    <p className=''>count is {count}</p>
                    <p className=''>multiple is {multi}</p>
                </div>

                <div className='border overflow-auto' style={{ height: '200px' }}>
                    <input type="text" value={userInput} className='mb-3 me-2' onChange={getData} />
                    <button onClick={click} className='btn btn-primary'>submit</button>
                    <div className=''>
                        {displayList.map((obj, index) => <div key={index}>{obj.response}</div>)}
                    </div>
                    {displayList.map((obj, index) => (
                        <p key={index} className='border p-2 bg-primary w-25'>{obj}</p>
                    ))}
                </div>

            </div>
            <div className=' border w-25 text-center mt-5 m-auto'>
                <h5>data from apicontext :</h5>
                <h4 className='text-primary'>{getAppContextData}</h4>
                <h4 className='text-info'>{getAppContextData2}</h4>
            </div>
        </>
    )
};

export default Demo;






