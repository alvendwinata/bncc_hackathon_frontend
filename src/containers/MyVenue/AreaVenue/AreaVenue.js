import React, { useState, useEffect } from "react";
import { Select, Upload, Button, Input, Icon, List } from "antd";
import { connect } from "react-redux";
import styles from './AreaVenue.module.css';
import axios from "../../../axios";
import * as actions from "../../../store/actions/index";

const { TextArea } = Input;
const format = 'HH:mm';
const { Option } = Select;

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
}

function AreaVenue({ user }) {
    const [unitName, setUnitName] = useState("");
    const [unitPic, setUnitPic] = useState(null);
    const [unitData, setUnitData] = useState([]);
    
    const resetUnitForm = () => { 
        setUnitName("")
        setUnitPic(null)
    }

    const addUnitHandler = () => { 
        const data = { 
            unitName : unitName,
            unitPic : unitPic
        }

        const restData = [...unitData]
        restData.push(data)
        setUnitData(restData)
        resetUnitForm()
    }

    const setUnitPicValue = value => { 
        setUnitPic(value.file.name)
    }

    const setUnitNameValue = value => { 
        setUnitName(value.target.value)
    }

    return (
        <>            
            <div className={styles.form_item}>
                <div className={styles.form_label}>Area Name</div>
                <Input className={styles.form_input} placeholder={"Ex: Football Court, Badminton Court, ..."} />
            </div>            
            <div className={styles.form_item}>
                <div className={styles.form_label}>Area Description</div>
                <TextArea className={styles.form_input} />
            </div>
            <div className={styles.form_item}>
                <div className={styles.box_form}>
                    <h3>Unit of Area</h3>
                    <p>Unit of area describe your quantity of units in your area, which explains the definition of each of those unit.</p>
                    <div className={styles.box_form_item}>
                        <div className={styles.form_label}>Unit Name</div>
                        <Input className={styles.form_input} placeholder={"Ex : Court C1, Court C2, ..."} value={unitName} onChange={setUnitNameValue} />
                    </div>
                    <div className={styles.box_form_item}>
                        <div className={styles.form_label}>Unit Picture</div>
                        <Upload {...props} onChange={setUnitPicValue}>
                            <Button>
                            <Icon type="upload" /> Click to Upload
                            </Button>
                        </Upload>
                    </div>
                    <div className={styles.box_form_button}>
                        <Button onClick={addUnitHandler}>Add Unit</Button>
                    </div>

                    <List
                        bordered
                        dataSource={unitData}
                        renderItem={item => (
                            <List.Item>
                                {item.unitName}
                            </List.Item>
                        )}
                    />
                </div>
            </div>

            <div className={styles.form_item}>
                <Button type="primary">Add Area</Button>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaVenue);