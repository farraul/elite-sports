import './ModalInfo.css';

const ModalInfo = (props) => {
    const dataModal=props.dataModal;
    const hideModalInfo = () => {
        props.setShowModalInfo(false)
    }

    return (
        <div className='modal-info-container'>
            <div className='modal-info-container-info'>
                <div className='modal-info-container-info-close'><span  onClick={hideModalInfo} className="modal-info-container-info-close-span">x</span></div>
                <div className='modal-info-container-info-data'>
                    <div className="modal-info-container-info-data-table">
                        <div className='modal-info-background-color-s'>
                            <div className='modal-info-container-info-data-table-name'>ID:</div>
                            <div>{dataModal.id}</div>
                        </div>
                        <div className='modal-info-background-color-s'>
                            <div className='modal-info-container-info-data-table-name'>Nombre:</div>
                            <div>{dataModal.name}</div>
                        </div>
                        <div className='modal-info-background-color-s'>
                            <div className='modal-info-container-info-data-table-name'>Región:</div>
                            <div>{dataModal.region}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ModalInfo;