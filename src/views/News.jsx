import React from "react";
import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/newspaper.svg";
import Recomment from './Recomment'
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

const News = () => {
    // const list = [
    //     { qty: 10, size: 'XXL' },
    //     { qty: 2, size: 'XL' },
    //     { qty: 8, size: 'M' }
    // ]
    // const list1 = [2, 5, 1, 6, 3];

    // list.sort((a, b) => (a.qty > b.qty) ? 1 : -1);

    // list1.sort((a, b) => (a > b) ? 1 : -1);
    // console.log(list1)

    // const list2 = [...list, { qty: 6, size: 's' }];

    // const [arr, setArr] = React.useState([1, 2, 3, 4]);
    // const [arrObj, setArrObj] = React.useState([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }]);
    // const [value, setValue] = React.useState();

    // const onChange = (e) => {
    //     setValue(e.target.value);
    // }

    // const onClick = () => {
    //     debugger
    //     // let tempt = arrObj.map(item => (
    //     //     item.id === 2 ? { ...item, name: value } : item
    //     // ))
    //     // setArr(tempt);
    //     setArrObj([...arrObj, { id: arr.length, name: value }]);
    //     arr[1] = value;
    //     arr.sort((a, b) => (a < b) ? 1 : -1);
    //     setArr(arr);
    //     setValue('');
    // }


    return (
        <div className="container my-3">
            {/* <div>
                <TextField value={value} onChange={onChange}></TextField>
            </div>
            <div>
                <Button onClick={onClick}>Add</Button>
            </div>

            {arr.map((item) => <div>{item}</div>)}
            {arrObj.map((item) => <div>{item.name}</div>)} */}

            <div className="row g-3">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            <IconEnvelopeFill className="i-va" /> News
                        </div>
                        <div className="card-body">
                            <div className="col-md-12" style={{ marginTop: 30 }}>
                                <iframe
                                    width='100%'
                                    height={315}
                                    src="https://www.youtube.com/embed/A4S4Yhmwxpo"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen=""
                                />
                            </div>
                            <div className="col-md-12" style={{ marginTop: 40 }}>
                                <iframe
                                    width='100%'
                                    height={315}
                                    src="https://www.youtube.com/embed/DpJ3QgJ3SKQ"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen=""
                                />
                            </div>
                            <div className="col-md-12" style={{ marginTop: 40 }}>
                                <iframe
                                    width='100%'
                                    height={315}
                                    src="https://www.youtube.com/embed/p8Dy1ZTsAUo"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Recomment />
                </div>
            </div>
        </div>
    );
}

export default News;
