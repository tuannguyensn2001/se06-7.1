import {useState} from "react";

function App() {

    const [src, setSrc] = useState();

    const [isChecked, setIsChecked] = useState(true);

    const onChange = (event) => {
        const file = event.target.files[0];

        setSrc(URL.createObjectURL(file));
    }


    return (
        <div>
            <input onChange={onChange} type="file"/>
            <input onChange={event => setIsChecked(event.target.checked)} checked={isChecked} type="checkbox"/>
            <div style={{
                width: '1000px',
                height: '1000px'
            }}>
                <model-viewer
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                    src={src}
                    camera-controls={false}
                />
            </div>
        </div>
    )
}

export default App;