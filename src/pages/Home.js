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
                        selected: false,
                    },
                    {
                        label: "Installation",
                        value: "installation",
                        selected: false,
                    }
                ],
                "reactjs": [],
                "typescript": [],
            },
            selectedMenuTitle: "Introduction",
            openMenu: false,
        }
    }

    handleClickTitle(value) {
        this.setState({
            selectedLanguage: value,
        })
    }
    handleSelectedOption(title){
        this.setState({
            selectedMenuTitle: title,
            openMenu: false,
        })
    }

    render() {
        let {selectedLanguage, titleByLanguage, selectedMenuTitle, openMenu} = this.state;
        return (
            <div className={`w-full grid grid-cols-1 h-full`}>

                <div className={`w-full flex fixed justify-between z-50  top-0`}>
                    <div className={`w-2/12 bg-white text-black px-1 md:px-10`}>
                        <div className={`flex md:gap-x-4 justify-center items-center pt-2`}>
                            <img onClick={()=> this.setState({openMenu: !openMenu})} src={logo} className={`w-10 h-10 `}/>
                            <div
                                className={`uppercase text-center hidden md:block font-bold`}>{selectedLanguage} {"Tutorial"}</div>
                        </div>
                    </div>
                    <div
                        className={`w-10/12 justify-end bg-primary text-white h-14 text-sm md:text-base lg:text-lg px-4 md:px-10 hidden md:flex`}>
                        <div
                            onClick={() => this.handleClickTitle("html")}
                            className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "html" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a href={"#html"} className={``}>HTML</a></div>
                        <div onClick={() => this.handleClickTitle("reactjs")}
                             className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "reactjs" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a
                                href={"#react"}>ReactJS</a></div>
                        <div onClick={() => this.handleClickTitle("typescript")}
                             className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "typescript" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a
                                href={"#typescript"}>Typescript</a></div>
                    </div>
                    <div
                        className={`w-10/12 justify-end bg-primary text-white h-14 text-sm md:text-base lg:text-lg px-4 md:px-10 flex md:hidden`}>
                        <select onChange={(e) => this.handleClickTitle(e.target.value)}
                                className={`bg-primary font-medium gap-2 text-white outline-none ring-0`}
                                value={selectedLanguage}>
                            <option value={"html"}>HTML</option>
                            <option value={"reactjs"}>React JS</option>
                            <option value={"typescript"}>Typescript</option>
                        </select>
                    </div>
                </div>
                <div
                    className={`w-full fixed top-14 flex justify-center bg-secondary text-white font-bold h-7 border-t border-b border-solid border-primary`}>
                    <div>IT Wisdom Network</div>
                </div>
                <div className={`w-full flex justify-between bg-white text-black overflow-hidden mt-14 font-medium`}>
                    <div
                        className={`w-2/12 hidden md:block bg-white text-black h-screen py-10 overflow-auto border-r-2 border-primary`}>
                        <div className={``}>
                            {
                                titleByLanguage[selectedLanguage].length === 0 ?
                                    <div className={`px-5 py-3`}>Coming soon...</div>
                                    :
                                    titleByLanguage[selectedLanguage].map(
                                        (language, ind) =>
                                            <div key={ind}
                                                 onClick={()=> this.handleSelectedOption(language.label)}
                                                 className={`py-3 hover:bg-activePrimary hover:text-white px-5 ${selectedMenuTitle === language.label && 'bg-activePrimary text-black font-black font-semibold'}`}>
                                                {language.label}
                                            </div>
                                    )

                            }
                        </div>
                    </div>
                    {
                        openMenu &&
                        <div className={`md:hidden z-10 top-14 w-10/12 shadow-2xl absolute bg-white`}>
                            {
                                titleByLanguage[selectedLanguage].length === 0 ?
                                    <div className={`px-5 py-3`}>Coming soon...</div>
                                    :
                                    titleByLanguage[selectedLanguage].map(
                                        (language, ind) =>
                                            <div key={ind}
                                                 onClick={() => this.handleSelectedOption(language.value)}
                                                 className={`py-3 hover:bg-activePrimary hover:text-white px-5 ${selectedMenuTitle === language.value && 'bg-activePrimary text-black font-black font-semibold'}`}>
                                                {language.label}
                                            </div>
                                    )

                            }
                        </div>
                    }
                    <div className={`w-full md:w-10/12 px-4 md:px-10 py-10 text-black`}>
                        <div className={`text-xl md:text-2xl font-semibold mb-4`}>{selectedMenuTitle}</div>
                        <div>
                            {
                                selectedMenuTitle === "Installation" &&
                                <iframe
                                        src="https://www.youtube.com/embed/NLEHISMioQw?si=zW4VrRx7Rd4ju2s-"
                                        title="How to install Sublime Text?"
                                        className={`w-full md:w-10/12 min-h-[40vh]`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;