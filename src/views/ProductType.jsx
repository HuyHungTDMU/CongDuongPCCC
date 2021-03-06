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
    { id: '1.0', name: 'T???t c???' },
    { id: '1.1', name: 'M??y b??m b?? ??p Pentax' },
    { id: '1.2', name: 'M??y b??m ch???a ch??y Diesel' },
    { id: '1.3', name: 'M??y b??m ch???a ch??y hi???u Windy' },
    { id: '1.4', name: 'M??y b??m ch???a ch??y KATO' },
    { id: '1.5', name: 'M??y b??m ch???a ch??y SALMSON' },
    { id: '1.6', name: 'M??y b??m ch???a ch??y SEIKOO HDF' },
    { id: '1.7', name: 'M??y b??m ch???a ch??y th??? n???i' },
    { id: '1.8', name: 'M??y b??m ch???a ch??y TOHATSU' },
    { id: '1.9', name: 'M??y b??m ??i???n ch???a ch??y EBARA' },
    { id: '1.10', name: 'M??y b??m ?????ng c?? x??ng HONDA' },
    { id: '1.11', name: 'M??y b??m ch???a ch??y MITSUKY' },
    { id: '1.12', name: 'M??y b??m n?????c TECO - ????I LOAN' },
    { id: '1.13', name: 'M??y b??m SEAR - ITALIA' },
    { id: '1.14', name: 'Nh?? ph??n ph???i m??y b??m SHAKTI' }
];

const list2 = [
    { id: '2.0', name: 'T???t c???' },
    { id: '2.1', name: 'B??nh Ch???a Ch??y - B??nh C???u H???a' },
    { id: '2.2', name: 'V??i Ch???a Ch??y' },
    { id: '2.3', name: 'L??ng Phun Ch???a Ch??y' },
    { id: '2.4', name: 'B??nh ??i???u ??p - B??nh T??ch ??p' },
    { id: '2.5', name: 'Thi???t b??? b???o h??? lao ?????ng' },
    { id: '2.6', name: '?????u phun ch???a ch??y SPRINKLER' },
    { id: '2.7', name: 'Foam Ch???a Ch??y AFFF' },
    { id: '2.8', name: 'Ch???a Ch??y T??? ?????ng CO2' },
    { id: '2.9', name: 'H??? Th???ng PCCC FM200' },
    { id: '2.10', name: 'H???ng Tr??? Ti???p N?????c' },
    { id: '2.11', name: 'H???p - T??? Ch???a Ch??y Ngo??i Tr???i' },
    { id: '2.12', name: 'M???n Ch???ng Ch??y' },
    { id: '2.13', name: 'Thang D??y Tho??t Hi???m' },
];

const list3 = [
    { id: '3.0', name: 'T???t c???' },
    { id: '3.1', name: 'B???ng Ch??? Th??? Ph???' },
    { id: '3.2', name: 'Chu??ng B??o Ch??y' },
    { id: '3.3', name: 'C??i B??o Ch??y - C??i B??o ?????ng' },
    { id: '3.4', name: '?????u B??o Gas' },
    { id: '3.5', name: '?????u B??o Kh??i BEAM' },
    { id: '3.6', name: '?????u B??o Nhi???t' },
    { id: '3.7', name: '????n B??o Ch??y' },
    { id: '3.8', name: '????n B??o Ph??ng' },
    { id: '3.9', name: '????n Emergency Chi???u S??ng S??? C???' },
];

const list4 = [
    { id: '4.0', name: 'T???t c???' },
    { id: '4.1', name: 'Ch???ng S??t Lan Truy???n' },
    { id: '4.2', name: 'Kim Thu S??t' },
    { id: '4.3', name: 'L???p ?????t H??? Th???ng Ch???ng S??t Thu L??i' },
    { id: '4.4', name: 'Ph??? Ki???n Ch???ng S??t' },
];

const list5 = [
    { id: '5.0', name: 'T???t c???' },
    { id: '5.1', name: 'Beam B??o Tr???m H??ng R??o' },
    { id: '5.2', name: 'C??ng T???c T??? B??o Tr???m' },
    { id: '5.3', name: '?????u D?? H???ng Ngo???i' },
    { id: '5.4', name: 'L???p ?????t H??? Th???ng B??o Tr???m_ B??o ?????ng' },
    { id: '5.5', name: 'Thi???t B??? B??o Tr???m Kh??ng D??y' },
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
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.0';
                lstDataType = list1;
            }
            if (props.location.state === '1.1') {
                lstData = data1_1;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.1';
                lstDataType = list1;
            }
            if (props.location.state === '1.2') {
                lstData = data1_2;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.2';
                lstDataType = list1;
            }
            if (props.location.state === '1.3') {
                lstData = data1_3;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.3';
                lstDataType = list1;
            }
            if (props.location.state === '1.4') {
                lstData = data1_4;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.4';
                lstDataType = list1;
            }
            if (props.location.state === '1.5') {
                lstData = data1_5;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.5';
                lstDataType = list1;
            }
            if (props.location.state === '1.6') {
                lstData = data1_6;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.6';
                lstDataType = list1;
            }
            if (props.location.state === '1.7') {
                lstData = data1_7;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.7';
                lstDataType = list1;
            }
            if (props.location.state === '1.8') {
                lstData = data1_8;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.8';
                lstDataType = list1;
            }
            if (props.location.state === '1.9') {
                lstData = data1_9;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.9';
                lstDataType = list1;
            }
            if (props.location.state === '1.10') {
                lstData = data1_10;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.10';
                lstDataType = list1;
            }
            if (props.location.state === '1.11') {
                lstData = data1_11;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.11';
                lstDataType = list1;
            }
            if (props.location.state === '1.12') {
                lstData = data1_12;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.12';
                lstDataType = list1;
            }
            if (props.location.state === '1.13') {
                lstData = data1_13;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.13';
                lstDataType = list1;
            }
            if (props.location.state === '1.14') {
                lstData = data1_14;
                name = 'M??y B??m Ch???a Ch??y';
                id = '1.14';
                lstDataType = list1;
            }

            if (props.location.state === '2.0') {
                lstData = [...data2_1, ...data2_2, ...data2_3, ...data2_4, ...data2_5, ...data2_6, ...data2_7, ...data2_8, ...data2_9, ...data2_10, ...data2_11, ...data2_12, ...data2_13];
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.0';
                lstDataType = list2;
            }
            if (props.location.state === '2.1') {
                lstData = data2_1;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.1';
                lstDataType = list2;
            }
            if (props.location.state === '2.2') {
                lstData = data2_2;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.2';
                lstDataType = list2;
            }
            if (props.location.state === '2.3') {
                lstData = data2_3;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.3';
                lstDataType = list2;
            }
            if (props.location.state === '2.4') {
                lstData = data2_4;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.4';
                lstDataType = list2;
            }
            if (props.location.state === '2.5') {
                lstData = data2_5;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.5';
                lstDataType = list2;
            }
            if (props.location.state === '2.6') {
                lstData = data2_6;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.6';
                lstDataType = list2;
            }
            if (props.location.state === '2.7') {
                lstData = data2_7;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.7';
                lstDataType = list2;
            }
            if (props.location.state === '2.8') {
                lstData = data2_8;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.8';
                lstDataType = list2;
            }
            if (props.location.state === '2.9') {
                lstData = data2_9;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.9';
                lstDataType = list2;
            }
            if (props.location.state === '2.10') {
                lstData = data2_10;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.10';
                lstDataType = list2;
            }
            if (props.location.state === '2.11') {
                lstData = data2_11;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.11';
                lstDataType = list2;
            }
            if (props.location.state === '2.12') {
                lstData = data2_12;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.12';
                lstDataType = list2;
            }
            if (props.location.state === '2.13') {
                lstData = data2_13;
                name = 'Thi???t B??? Ch???a Ch??y';
                id = '2.13';
                lstDataType = list2;
            }

            if (props.location.state === '3.0') {
                lstData = [...data3_1, ...data3_2, ...data3_3, ...data3_4, ...data3_5, ...data3_6, ...data3_7, ...data3_8, ...data3_9];
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.0';
                lstDataType = list3;
            }
            if (props.location.state === '3.1') {
                lstData = data3_1;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.1';
                lstDataType = list3;
            }
            if (props.location.state === '3.2') {
                lstData = data3_2;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.2';
                lstDataType = list3;
            }
            if (props.location.state === '3.3') {
                lstData = data3_3;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.3';
                lstDataType = list3;
            }
            if (props.location.state === '3.4') {
                lstData = data3_4;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.4';
                lstDataType = list3;
            }
            if (props.location.state === '3.5') {
                lstData = data3_5;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.5';
                lstDataType = list3;
            }
            if (props.location.state === '3.6') {
                lstData = data3_6;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.6';
                lstDataType = list3;
            }
            if (props.location.state === '3.7') {
                lstData = data3_7;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.7';
                lstDataType = list3;
            }
            if (props.location.state === '3.8') {
                lstData = data3_8;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.8';
                lstDataType = list3;
            }
            if (props.location.state === '3.9') {
                lstData = data3_9;
                name = 'Thi???t B??? B??o Ch??y';
                id = '3.9';
                lstDataType = list3;
            }

            if (props.location.state === '4.0') {
                lstData = [...data4_1, ...data4_2, ...data4_3, ...data4_4];
                name = 'Thi???t B??? Ch???ng S??t';
                id = '4.0';
                lstDataType = list4;
            }
            if (props.location.state === '4.1') {
                lstData = data4_1;
                name = 'Thi???t B??? Ch???ng S??t';
                id = '4.1';
                lstDataType = list4;
            }
            if (props.location.state === '4.2') {
                lstData = data4_2;
                name = 'Thi???t B??? Ch???ng S??t';
                id = '4.2';
                lstDataType = list4;
            }
            if (props.location.state === '4.3') {
                lstData = data4_3;
                name = 'Thi???t B??? Ch???ng S??t';
                id = '4.3';
                lstDataType = list4;
            }
            if (props.location.state === '4.4') {
                lstData = data4_4;
                name = 'Thi???t B??? Ch???ng S??t';
                id = '4.4';
                lstDataType = list4;
            }

            if (props.location.state === '5.0') {
                lstData = [...data5_1, ...data5_2, ...data5_3, ...data5_4, ...data5_5];
                name = 'Thi???t B??? B??o Tr???m';
                id = '5.0';
                lstDataType = list5;
            }
            if (props.location.state === '5.1') {
                lstData = data5_1;
                name = 'Thi???t B??? B??o Tr???m';
                id = '5.1';
                lstDataType = list5;
            }
            if (props.location.state === '5.2') {
                lstData = data5_2;
                name = 'Thi???t B??? B??o Tr???m';
                id = '5.2';
                lstDataType = list5;
            }
            if (props.location.state === '5.3') {
                lstData = data5_3;
                name = 'Thi???t B??? B??o Tr???m';
                id = '5.3';
                lstDataType = list5;
            }
            if (props.location.state === '5.4') {
                lstData = data5_4;
                name = 'Thi???t B??? B??o Tr???m';
                id = '5.4';
                lstDataType = list5;
            }
            if (props.location.state === '5.5') {
                lstData = data5_5;
                name = 'Thi???t B??? B??o Tr???m';
                id = '5.5';
                lstDataType = list5;
            }

            if (props.location.state === '6.0') {
                name = 'D??? ??n PCCC';
                lstData = [];
                id = '';
                lstDataType = [];
            }

            if (props.location.state === '7.0') {
                name = 'V??n B???n PCCC';
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
                        <div className="card-text text-danger" style={{ textAlign: 'left', fontWeight: 'bold' }}> Li??n H???</div>
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
