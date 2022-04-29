import React from "react";
import data1_1 from "./data/1/data1";
import data1_2 from "./data/1/data2";
import data1_3 from "./data/1/data3";
import data1_4 from "./data/1/data4";
import data1_5 from "./data/1/data5";
import data1_6 from "./data/1/data6";
import data1_7 from "./data/1/data7";
import data1_8 from "./data/1/data8";
import data1_9 from "./data/1/data9";
import data1_10 from "./data/1/data10";
import data1_11 from "./data/1/data11";
import data1_12 from "./data/1/data12";
import data1_13 from "./data/1/data13";
import data1_14 from "./data/1/data14";
import data2_1 from "./data/2/data1";
import data2_2 from "./data/2/data2";
import data2_3 from "./data/2/data3";
import data2_4 from "./data/2/data4";
import data2_5 from "./data/2/data5";
import data2_6 from "./data/2/data6";
import data2_7 from "./data/2/data7";
import data2_8 from "./data/2/data8";
import data2_9 from "./data/2/data9";
import data2_10 from "./data/2/data10";
import data2_11 from "./data/1/data11";
import data2_12 from "./data/2/data12";
import data2_13 from "./data/2/data13";
import data3_1 from "./data/3/data1";
import data3_2 from "./data/3/data2";
import data3_3 from "./data/3/data3";
import data3_4 from "./data/3/data4";
import data3_5 from "./data/3/data5";
import data3_6 from "./data/3/data6";
import data3_7 from "./data/3/data7";
import data3_8 from "./data/3/data8";
import data3_9 from "./data/3/data9";
import data4_1 from "./data/4/data1";
import data4_2 from "./data/4/data2";
import data4_3 from "./data/4/data3";
import data4_4 from "./data/4/data4";
import data5_1 from "./data/5/data1";
import data5_2 from "./data/5/data2";
import data5_3 from "./data/5/data3";
import data5_4 from "./data/5/data4";
import data5_5 from "./data/5/data5";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { withStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from "react-router-dom";

const list1 = [
    { id: '1.0', name: 'Tất cả' },
    { id: '1.1', name: 'Máy bơm bù áp Pentax' },
    { id: '1.2', name: 'Máy bơm chữa cháy Diesel' },
    { id: '1.3', name: 'Máy bơm chữa cháy hiệu Windy' },
    { id: '1.4', name: 'Máy bơm chữa cháy KATO' },
    { id: '1.5', name: 'Máy bơm chữa cháy SALMSON' },
    { id: '1.6', name: 'Máy bơm chữa cháy SEIKOO HDF' },
    { id: '1.7', name: 'Máy bơm chữa cháy thả nổi' },
    { id: '1.8', name: 'Máy bơm chữa cháy TOHATSU' },
    { id: '1.9', name: 'Máy bơm điện chữa cháy EBARA' },
    { id: '1.10', name: 'Máy bơm động cơ xăng HONDA' },
    { id: '1.11', name: 'Máy bơm chữa cháy MITSUKY' },
    { id: '1.12', name: 'Máy bơm nước TECO - ĐÀI LOAN' },
    { id: '1.13', name: 'Máy bơm SEAR - ITALIA' },
    { id: '1.14', name: 'Nhà phân phối máy bơm SHAKTI' }
];

const list2 = [
    { id: '2.0', name: 'Tất cả' },
    { id: '2.1', name: 'Bình Chữa Cháy - Bình Cứu Hỏa' },
    { id: '2.2', name: 'Vòi Chữa Cháy' },
    { id: '2.3', name: 'Lăng Phun Chữa Cháy' },
    { id: '2.4', name: 'Bình Điều Áp - Bình Tích Áp' },
    { id: '2.5', name: 'Thiết bị bảo hộ lao động' },
    { id: '2.6', name: 'Đầu phun chữa cháy SPRINKLER' },
    { id: '2.7', name: 'Foam Chữa Cháy AFFF' },
    { id: '2.8', name: 'Chữa Cháy Tự Động CO2' },
    { id: '2.9', name: 'Hệ Thống PCCC FM200' },
    { id: '2.10', name: 'Họng Trụ Tiếp Nước' },
    { id: '2.11', name: 'Hộp - Tủ Chữa Cháy Ngoài Trời' },
    { id: '2.12', name: 'Mền Chống Cháy' },
    { id: '2.13', name: 'Thang Dây Thoát Hiểm' },
];

const list3 = [
    { id: '3.0', name: 'Tất cả' },
    { id: '3.1', name: 'Bảng Chỉ Thị Phụ' },
    { id: '3.2', name: 'Chuông Báo Cháy' },
    { id: '3.3', name: 'Còi Báo Cháy - Còi Báo Động' },
    { id: '3.4', name: 'Đầu Báo Gas' },
    { id: '3.5', name: 'Đầu Báo Khói BEAM' },
    { id: '3.6', name: 'Đầu Báo Nhiệt' },
    { id: '3.7', name: 'Đèn Báo Cháy' },
    { id: '3.8', name: 'Đèn Báo Phòng' },
    { id: '3.9', name: 'Đèn Emergency Chiếu Sáng Sự Cố' },
];

const list4 = [
    { id: '4.0', name: 'Tất cả' },
    { id: '4.1', name: 'Chống Sét Lan Truyền' },
    { id: '4.2', name: 'Kim Thu Sét' },
    { id: '4.3', name: 'Lắp Đặt Hệ Thống Chống Sét Thu Lôi' },
    { id: '4.4', name: 'Phụ Kiện Chống Sét' },
];

const list5 = [
    { id: '5.0', name: 'Tất cả' },
    { id: '5.1', name: 'Beam Báo Trộm Hàng Rào' },
    { id: '5.2', name: 'Công Tắc Từ Báo Trộm' },
    { id: '5.3', name: 'Đầu Dò Hồng Ngoại' },
    { id: '5.4', name: 'Lắp Đặt Hệ Thống Báo Trộm_ Báo Động' },
    { id: '5.5', name: 'Thiết Bị Báo Trộm Không Dây' },
];


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const ProductType = (props) => {
    const [title, setTitle] = React.useState('');

    const [key, setKey] = React.useState(0);
    const [data, setData] = React.useState([]);
    const [dataType, setDataType] = React.useState([]);

    const history = useHistory();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (props.location.state === null || props.location.state === undefined) {
            history.push("/");
        }
        else {
            let id = '';
            let name = '';
            let lstData = [];
            let lstDataType = [];
            if (props.location.state === '1.0') {
                lstData = [...data1_1, ...data1_2, ...data1_3, ...data1_4, ...data1_5, ...data1_6, ...data1_7, ...data1_8, ...data1_9, ...data1_10, ...data1_11, ...data1_12, ...data1_13, ...data1_14];
                name = 'Máy Bơm Chữa Cháy';
                id = '1.0';
                lstDataType = list1;
            }
            if (props.location.state === '1.1') {
                lstData = data1_1;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.1';
                lstDataType = list1;
            }
            if (props.location.state === '1.2') {
                lstData = data1_2;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.2';
                lstDataType = list1;
            }
            if (props.location.state === '1.3') {
                lstData = data1_3;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.3';
                lstDataType = list1;
            }
            if (props.location.state === '1.4') {
                lstData = data1_4;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.4';
                lstDataType = list1;
            }
            if (props.location.state === '1.5') {
                lstData = data1_5;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.5';
                lstDataType = list1;
            }
            if (props.location.state === '1.6') {
                lstData = data1_6;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.6';
                lstDataType = list1;
            }
            if (props.location.state === '1.7') {
                lstData = data1_7;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.7';
                lstDataType = list1;
            }
            if (props.location.state === '1.8') {
                lstData = data1_8;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.8';
                lstDataType = list1;
            }
            if (props.location.state === '1.9') {
                lstData = data1_9;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.9';
                lstDataType = list1;
            }
            if (props.location.state === '1.10') {
                lstData = data1_10;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.10';
                lstDataType = list1;
            }
            if (props.location.state === '1.11') {
                lstData = data1_11;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.11';
                lstDataType = list1;
            }
            if (props.location.state === '1.12') {
                lstData = data1_12;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.12';
                lstDataType = list1;
            }
            if (props.location.state === '1.13') {
                lstData = data1_13;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.13';
                lstDataType = list1;
            }
            if (props.location.state === '1.14') {
                lstData = data1_14;
                name = 'Máy Bơm Chữa Cháy';
                id = '1.14';
                lstDataType = list1;
            }

            if (props.location.state === '2.0') {
                lstData = [...data2_1, ...data2_2, ...data2_3, ...data2_4, ...data2_5, ...data2_6, ...data2_7, ...data2_8, ...data2_9, ...data2_10, ...data2_11, ...data2_12, ...data2_13];
                name = 'Thiết Bị Chữa Cháy';
                id = '2.0';
                lstDataType = list2;
            }
            if (props.location.state === '2.1') {
                lstData = data2_1;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.1';
                lstDataType = list2;
            }
            if (props.location.state === '2.2') {
                lstData = data2_2;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.2';
                lstDataType = list2;
            }
            if (props.location.state === '2.3') {
                lstData = data2_3;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.3';
                lstDataType = list2;
            }
            if (props.location.state === '2.4') {
                lstData = data2_4;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.4';
                lstDataType = list2;
            }
            if (props.location.state === '2.5') {
                lstData = data2_5;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.5';
                lstDataType = list2;
            }
            if (props.location.state === '2.6') {
                lstData = data2_6;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.6';
                lstDataType = list2;
            }
            if (props.location.state === '2.7') {
                lstData = data2_7;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.7';
                lstDataType = list2;
            }
            if (props.location.state === '2.8') {
                lstData = data2_8;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.8';
                lstDataType = list2;
            }
            if (props.location.state === '2.9') {
                lstData = data2_9;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.9';
                lstDataType = list2;
            }
            if (props.location.state === '2.10') {
                lstData = data2_10;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.10';
                lstDataType = list2;
            }
            if (props.location.state === '2.11') {
                lstData = data2_11;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.11';
                lstDataType = list2;
            }
            if (props.location.state === '2.12') {
                lstData = data2_12;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.12';
                lstDataType = list2;
            }
            if (props.location.state === '2.13') {
                lstData = data2_13;
                name = 'Thiết Bị Chữa Cháy';
                id = '2.13';
                lstDataType = list2;
            }

            if (props.location.state === '3.0') {
                lstData = [...data3_1, ...data3_2, ...data3_3, ...data3_4, ...data3_5, ...data3_6, ...data3_7, ...data3_8, ...data3_9];
                name = 'Thiết Bị Báo Cháy';
                id = '3.0';
                lstDataType = list3;
            }
            if (props.location.state === '3.1') {
                lstData = data3_1;
                name = 'Thiết Bị Báo Cháy';
                id = '3.1';
                lstDataType = list3;
            }
            if (props.location.state === '3.2') {
                lstData = data3_2;
                name = 'Thiết Bị Báo Cháy';
                id = '3.2';
                lstDataType = list3;
            }
            if (props.location.state === '3.3') {
                lstData = data3_3;
                name = 'Thiết Bị Báo Cháy';
                id = '3.3';
                lstDataType = list3;
            }
            if (props.location.state === '3.4') {
                lstData = data3_4;
                name = 'Thiết Bị Báo Cháy';
                id = '3.4';
                lstDataType = list3;
            }
            if (props.location.state === '3.5') {
                lstData = data3_5;
                name = 'Thiết Bị Báo Cháy';
                id = '3.5';
                lstDataType = list3;
            }
            if (props.location.state === '3.6') {
                lstData = data3_6;
                name = 'Thiết Bị Báo Cháy';
                id = '3.6';
                lstDataType = list3;
            }
            if (props.location.state === '3.7') {
                lstData = data3_7;
                name = 'Thiết Bị Báo Cháy';
                id = '3.7';
                lstDataType = list3;
            }
            if (props.location.state === '3.8') {
                lstData = data3_8;
                name = 'Thiết Bị Báo Cháy';
                id = '3.8';
                lstDataType = list3;
            }
            if (props.location.state === '3.9') {
                lstData = data3_9;
                name = 'Thiết Bị Báo Cháy';
                id = '3.9';
                lstDataType = list3;
            }

            if (props.location.state === '4.0') {
                lstData = [...data4_1, ...data4_2, ...data4_3, ...data4_4];
                name = 'Thiết Bị Chống Sét';
                id = '4.0';
                lstDataType = list4;
            }
            if (props.location.state === '4.1') {
                lstData = data4_1;
                name = 'Thiết Bị Chống Sét';
                id = '4.1';
                lstDataType = list4;
            }
            if (props.location.state === '4.2') {
                lstData = data4_2;
                name = 'Thiết Bị Chống Sét';
                id = '4.2';
                lstDataType = list4;
            }
            if (props.location.state === '4.3') {
                lstData = data4_3;
                name = 'Thiết Bị Chống Sét';
                id = '4.3';
                lstDataType = list4;
            }
            if (props.location.state === '4.4') {
                lstData = data4_4;
                name = 'Thiết Bị Chống Sét';
                id = '4.4';
                lstDataType = list4;
            }

            if (props.location.state === '5.0') {
                lstData = [...data5_1, ...data5_2, ...data5_3, ...data5_4, ...data5_5];
                name = 'Thiết Bị Báo Trộm';
                id = '5.0';
                lstDataType = list5;
            }
            if (props.location.state === '5.1') {
                lstData = data5_1;
                name = 'Thiết Bị Báo Trộm';
                id = '5.1';
                lstDataType = list5;
            }
            if (props.location.state === '5.2') {
                lstData = data5_2;
                name = 'Thiết Bị Báo Trộm';
                id = '5.2';
                lstDataType = list5;
            }
            if (props.location.state === '5.3') {
                lstData = data5_3;
                name = 'Thiết Bị Báo Trộm';
                id = '5.3';
                lstDataType = list5;
            }
            if (props.location.state === '5.4') {
                lstData = data5_4;
                name = 'Thiết Bị Báo Trộm';
                id = '5.4';
                lstDataType = list5;
            }
            if (props.location.state === '5.5') {
                lstData = data5_5;
                name = 'Thiết Bị Báo Trộm';
                id = '5.5';
                lstDataType = list5;
            }

            if (props.location.state === '6.0') {
                name = 'Dự Án PCCC';
                lstData = [];
                id = '';
                lstDataType = [];
            }

            if (props.location.state === '7.0') {
                name = 'Văn Bản PCCC';
                lstData = [];
                id = '';
                lstDataType = [];
            }
            setTitle(name);
            setKey(id)
            setData(lstData);
            setDataType(lstDataType);
        }
    }, [props.location.state, history])

    // map the rows as div.row
    const carouselContent = data.map((product, idx) => {
        return (
            <div key={idx} className="col-md-2" style={{ minHeight: 120, minWidth: 120 }} >
                <div className="card text-center">
                    <div className="card-body" >
                        <Link to={{ pathname: '/detail', state: product }}>
                            <img src={product.img} alt="" style={{ maxHeight: 120, minHeight: 120, maxWidth: '90%', }} />
                        </Link>
                        <div style={{
                            textAlign: 'left', maxHeight: 50, minHeight: 50, marginTop: 10, overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>{product.title}</div>
                        <div className="card-text text-danger" style={{ textAlign: 'left', fontWeight: 'bold' }}> Liên Hệ</div>
                        <small className="text-muted" />
                    </div>
                </div>
            </div>
        );
    });

    const onChange = (event) => {
        props.location.state = event.target.value;
        setKey(event.target.value);
    }

    return (
        <div className="container my-3">
            <div className="row g-3">
                <div className="col-md-3" style={{ maxHeight: 350, minHeight: 350, minWidth: 250 }}>
                    <MenuItem />
                </div>
                <div className="col-md-9">
                    <div className="card mb-3">
                        <div className="card-header" style={{ fontWeight: 'bold' }}>
                            {title} &nbsp;&nbsp;&nbsp;&nbsp;
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={key}
                                onChange={onChange}
                                input={<BootstrapInput />}
                            >
                                {
                                    dataType.map((item) =>
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )
                                }
                            </NativeSelect>
                        </div>
                        <div className="card-body">
                            <div className="row g-2" style={{ marginBottom: 10 }}>
                                {carouselContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductType;
