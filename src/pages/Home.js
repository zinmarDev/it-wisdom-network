import React from "react";
import logo from "../assets/ItNetworkLogo.jpg"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "html",
            titleByLanguage: {
                "html": [
                    {
                        label: "Introduction",
                        value: "introduction",
                    },
                    {
                        label: "Installation",
                        value: "installation",
                    }
                ]
            }
        }
    }

    handleClickTitle(value){
        this.setState({
            selectedLanguage: value,
        })
    }

    render() {
        let {selectedLanguage} = this.state;
        return (
            <div className={`w-full grid grid-cols-1 h-full`}>

                <div className={`w-full flex justify-between z-50`}>
                    <div className={`w-2/12 bg-white text-black px-4 md:px-10`}>
                        <div className={`flex gap-x-4 justify-center items-center pt-2`}>
                            <img src={logo} className={`w-10 h-10 bg-cover object-cover`}/>
                            <div className={`uppercase text-center font-bold`}>{selectedLanguage} {"Tutorial"}</div>
                        </div>
                    </div>
                    <div
                        className={`w-10/12 flex justify-end bg-primary text-white h-14 text-sm md:text-base lg:text-lg px-10`}>
                        <div
                            onClick={() => this.handleClickTitle("html")}
                            className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "html" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a href={"#html"} className={``}>HTML</a></div>
                        <div onClick={() => this.handleClickTitle("reactjs")} className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "reactjs" && 'bg-hoverPrimary text-black font-medium'}`}><a
                            href={"#react"}>ReactJS</a></div>
                        <div onClick={() => this.handleClickTitle("typescript")} className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "typescript" && 'bg-hoverPrimary text-black font-medium'}`}><a
                            href={"#typescript"}>Typescript</a></div>
                    </div>
                </div>
                <div
                    className={`w-full flex justify-center bg-secondary text-white font-bold h-7 border-t border-b border-solid border-primary`}>
                    <div>IT Wisdom Network</div>
                </div>
                <div className={`w-full flex justify-between bg-white text-black`}>
                    <div className={`w-2/12 bg-white text-black px-4 md:px-10 py-2`}>

                    </div>
                    <div className={`w-10/12 px-4 md:px-10 py-2`}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;