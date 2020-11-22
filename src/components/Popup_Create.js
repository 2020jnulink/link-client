import React from "react";
import "./Popup_Create.css";
import Dropzone from "react-dropzone";
import classNames from "classnames";

const imageMaxSize = 10000000; //bytes
const acceptedFileTypes =
    "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
    return item.trim();
});

class Popup_Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            manufacturer: "",
            price: "",
            walletid: "",
            imgSrc: null,
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }); //치는거 바뀔떄마다 데이터 변경
    };

    verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
            if (currentFileSize > imageMaxSize) {
                alert(
                    "이 파일은 허용되지 않습니다." +
                    imageMaxSize +
                    "bytes이하의 파일을 업로드해주세요."
                );
                return false;
            }
            if (!acceptedFileTypesArray.includes(currentFileType)) {
                alert("이미지 파일만 업로드 가능합니다.");
                return false;
            }
            return true;
        }
    };
    handleOnDrop = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            this.verifyFile(rejectedFiles);
        }
        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files);
            if (isVerified) {
                //imageBase64Data
                const currentFile = files[0];
                const MyFileItemReader = new FileReader();
                MyFileItemReader.addEventListener(
                    "load",
                    () => {
                        console.log(MyFileItemReader.result);
                        this.setState({
                            imgSrc: MyFileItemReader.result,
                        });
                    },
                    false
                );
                MyFileItemReader.readAsDataURL(currentFile);
            }
        }
    };

    render() {
        const { closePopup, setStateScooterList, scooterList } = this.props;
        const { imgSrc, title, manufacturer, price, walletid } = this.state;
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div className="popup_inner__center">
                        <div className="popup_class__title">Create Scooter</div>
                        <div className="popup_class__main">
                            <div className="create_main">
                                {imgSrc !== null ? (
                                    <img id="create_img" src={imgSrc} />
                                ) : (
                                        <Dropzone
                                            onDrop={this.handleOnDrop}
                                            accept={acceptedFileTypes}
                                            className="drop_zone"
                                        >
                                            {({ getRootProps, getInputProps, isDragActive }) => {
                                                return (
                                                    <div
                                                        {...getRootProps()}
                                                        className={classNames("dropzone", {
                                                            "dropzone--isActive": isDragActive,
                                                        })}
                                                    >
                                                        <input {...getInputProps()} />
                                                        {isDragActive ? (
                                                            <p>Drop files here...</p>
                                                        ) : (
                                                                <p>
                                                                    파일을 드래그 하거나, 클릭하여 파일을
                                                                    선택하세요.
                                                                </p>
                                                            )}
                                                    </div>
                                                );
                                            }}
                                        </Dropzone>
                                    )}
                                <div className="create_main__que">
                                    <div className="create_que__name">Title</div>
                                    <div className="create_que__id">Manufacturer</div>
                                    <div className="create_que__password">Price</div>
                                    <div className="create_que__resident">
                                        WalletID
                                </div>
                                </div>
                                <div className="create_main__var">
                                    <div className="create_var__var">:</div>
                                    <div className="create_var__var">:</div>
                                    <div className="create_var__var">:</div>
                                    <div className="create_var__var">:</div>
                                </div>
                                <div className="create_main__input">
                                    <input
                                        className="create_input__name"
                                        onChange={this.handleChange}
                                        name="title"
                                        value={this.state.title} // eslint-disable-line no-unused-vars
                                    />
                                    <input
                                        className="create_input__id"
                                        onChange={this.handleChange}
                                        name="manufacturer"
                                        value={this.state.manufacturer} // eslint-disable-line no-unused-vars
                                    />
                                    <input
                                        className="create_input__password"
                                        onChange={this.handleChange}
                                        name="price"
                                        value={this.state.price} // eslint-disable-line no-unused-vars
                                    />
                                    <input
                                        className="create_input__resident"
                                        onChange={this.handleChange}
                                        name="walletid"
                                        value={this.state.walletid} // eslint-disable-line no-unused-vars
                                    />
                                </div>
                            </div>
                            <div className="scooter_create__close">
                                <button
                                    id="scooter_create__close_btn"
                                    onClick={() => {
                                        closePopup();
                                        setStateScooterList(
                                            scooterList.concat([
                                                {
                                                    imgSrc,
                                                    title,
                                                    manufacturer,
                                                    price,
                                                    walletid
                                                }
                                            ])
                                        );
                                    }}
                                >
                                    저장하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup_Create;
