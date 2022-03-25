import logo from '../../assets/images/Logo.svg';
import { useNavigate } from 'react-router-dom';
import './ModalInfo.css';

const ModalInfo = (props) => {

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history(url);
    }

    const hideModalInfo = () => {
        props.setShowModalInfo(false)
    }

    console.log("props", props)
    let dataModal = props.dataModal;
    console.log("propsdata", dataModal)

    return (
        <div className='modal-info-container'>
            <div className='modal-info-container-info'>
                <div className='modal-info-container-info-close'><span  onClick={hideModalInfo} className="modal-info-container-info-close-span">x</span></div>
                <div className='modal-info-container-info-data'>
                    <table class="modal-info-container-info-data-table">
                        <tr className='modal-info-background-color-s'>
                            <td className='modal-info-container-info-data-table-name'>ID:</td>
                            <td>{dataModal.id}</td>
                        </tr>
                        <tr className='modal-info-background-color-s'>
                            <td className='modal-info-container-info-data-table-name'>Nombre:</td>
                            <td>{dataModal.name}</td>
                        </tr>
                        <tr className='modal-info-background-color-s'>
                            <td className='modal-info-container-info-data-table-name'>Región:</td>
                            <td>{dataModal.region}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    )
};


export default ModalInfo;