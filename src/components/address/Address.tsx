import React ,{useState, useEffect} from 'react'
import {Address} from './AddressInterface'
import './Address.scss'

interface Props {
    address: Address,
    onChangeAddressHandler: (e:any) => void
}

const AddressComponent: React.FC<Props> = ({ address, onChangeAddressHandler }) => {

    const [isAddressReadOnly, setisAddressReadOnly] = useState<boolean>(false)
    const [data, setdata] = useState<Address>()

    // useEffect(() => {
    //    setisAddressReadOnly(true)
    // }, [])

    useEffect(() => {
        console.log("Address effect", address)
        if(Object.keys(address).length !== 0) {
            console.log("###")
            setisAddressReadOnly(true)
            setdata(address)
        }
    }, [address])

    const onClickEditHandler = () => {
        console.log("onClickEditHandler handler")
        setisAddressReadOnly(false)
    }

    const onClickSaveHandler = () => {
        console.log("onckicksave handler")
        onChangeAddressHandler(data)
    }

    const onChangeTextHandler = (e:any) => {
        let d:any = {...data, [e.target.id]:e.target.value}
        setdata(d)
    }

    return (
        <>
            <h2 className="shipping_heading">Shipping Address</h2>
            <div className="form-box">
                <div className="form-group">
                    <label className="custom-label">Name</label>
                    <input type="text" className="form-control" id="name" name="" value={data?.name} onChange={onChangeTextHandler} readOnly={isAddressReadOnly}/>
                </div>
                <div className="form-group">
                    <label className="custom-label">Email</label>
                    <input type="email" className="form-control" id="email" name="" value={data?.email} onChange={onChangeTextHandler} readOnly={isAddressReadOnly}/>
                </div>
                <div className="form-group">
                    <label className="custom-label">Phone number</label>
                    <input type="text" className="form-control" id="phoneNumber" name="" value={data?.phoneNumber} onChange={onChangeTextHandler} readOnly={isAddressReadOnly}/>
                </div>
                <div className="form-group">
                    <label className="custom-label">Address</label>
                    <textarea className="form-control form-text-area" id="shippingAddress" onChange={onChangeTextHandler} readOnly={isAddressReadOnly} value={data?.shippingAddress}></textarea>
                </div>
                <div>
                <button id="save" type="button" className="product_btns btn2" onClick={(e) => onClickSaveHandler()}>Save Address</button>
                <button id="edit" type="button" className="product_btns btn1" onClick={onClickEditHandler}>Edit Address</button></div>            </div>
        </>
    )
}

export default AddressComponent
