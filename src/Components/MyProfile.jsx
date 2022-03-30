import React from 'react'
import MerchIcon from '../Assets/Images/Frame.png'

const styles = {
    containermain: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    leftcontainer: {
        flex: '30%',
        display: 'flex',
        flexDirection: 'column',
    },
    h3: {
        fontSize: '24px',
        color: '#F74D4D',
        marginBottom: '15px',
    },
    img1: {
        width: '338px',
        height: '435px',
        objectFit: 'cover',
    },
    midcontainer: {
        flex: '30%',
        display: 'flex',
        flexDirection: 'column',
    },
    pFirstLabel: {
        fontSize: '18px',
        color: '#F74D4D',
        marginBottom: '2px',
        marginTop: '40px'
    },
    pLabel: {
        fontSize: '18px',
        color: '#F74D4D',
        marginBottom: '2px',
    },
    pValue: {
        fontSize: '18px',
        color: 'white',
        marginBottom: '6px',
    },
    rightcontainer: {
        flex: '40%',
        display: 'flex',
        flexDirection: 'column',
    },
    widebox: {
        backgroundColor: '#303030',
        display: 'flex',
    },
    img2: {
        width: '80px',
        height: '120px',
        objectFit: 'cover',
    },
    vBox: {
        display: 'flex',
        flexDirection: 'Column',
    },
    pTitle: {
        fontSize: '14px',
        color: '#F74D4D',
        marginBottom: '3px',
    },
    pDate: {
        fontSize: '9px',
        color: '#F74D4D',
        marginBottom: '10px',
    },
    pPrice: {
        fontSize: '10px',
        color: '#F74D4D',
        marginBottom: '30px',
    },
    pSubTotal: {
        fontSize: '10px',
        fontWeight: '600',
        color: 'white',
    },
    icon: {
        marginLeft: 'auto',
        width: '70px',
        height: '100px',
        objectFit: 'cover',
    }
}


function MyProfile(props) {
  return (
    <div style={styles.containermain} className="myProfileContainer">
        <div style={styles.leftcontainer} className="profileLeftContent">
            <h3 style={styles.h3}>My Profile</h3>
            <img style={styles.img1} src={props.img1} />
        </div>
        <div style={styles.midcontainer} className="profileMiddleContent">
            <p style={styles.pFirstLabel}>Name</p>
            <p style={styles.pValue}>{props.name}</p>
            <p style={styles.pLabel}>Email</p>
            <p style={styles.pValue}>{props.email}</p>
            <p style={styles.pLabel}>Phone</p>
            <p style={styles.pValue}>{props.phone}</p>
            <p style={styles.pLabel}>Gender</p>
            <p style={styles.pValue}>{props.gender}</p>
            <p style={styles.pLabel}>Adress</p>
            <p style={styles.pValue}>{props.adress}</p>
        </div>
        <div style={styles.rightcontainer} className="profileRightContent">
            <h3 style={styles.h3}>My Transaction</h3>
            <div style={styles.widebox} className="transactionContainer">
                <img style={styles.img2} src={props.img2} alt=''/>
                <div style={styles.vBox} className="transactionDetails">
                    <p style={styles.pTitle}>{props.title}</p>
                    <p style={styles.pDate}>{props.date}</p>
                    <p style={styles.pPrice}>Price : Rp.{props.price}</p>
                    <p style={styles.pSubTotal}>Sub Total : {props.subtotal}</p>
                </div>
                <img style={styles.icon} src={MerchIcon} alt='icon'/>
            </div>
        </div>
    </div>
  )
}

export default MyProfile