// 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
import * as React from 'react';

const API_KEY = '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';

interface TextConverterProps {}

interface TextConverterState {
    inputText: string;
    outputText: string;
}

const TextConverter: React.FC<TextConverterProps> = () => {
    const [inputTextImage, setInputTextImage] = React.useState('');

    const [outputTextImage, setOutputTextImage] = React.useState('');
    const [outputTextImage2, setOutputTextImage2] = React.useState('');
    const [outputTextImage3, setOutputTextImage3] = React.useState('');

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTextImage(event.target.value);
    };

    const handleSubmitImage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const { Configuration, OpenAIApi } = require('openai');
            const configuration = new Configuration({
                apiKey: API_KEY
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
                prompt: `"${inputTextImage}"`,
                n: 3,
                size: '1024x1024'
            });
            setOutputTextImage(response.data.data[0].url);
            setOutputTextImage2(response.data.data[1].url);
            setOutputTextImage3(response.data.data[2].url);
            console.log(response.data.data[0].url);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmitImage}>
                <label>
                    Input Text:
                    <input style={{ width: '100%' }} type="text" value={inputTextImage} onChange={handleChangeImage} />
                </label>
                <input type="submit" value="Convert" />
            </form>
            {outputTextImage ? (
                <div>
                    <img src={outputTextImage} style={{ width: '500px', height: '500px' }} />
                    <img src={outputTextImage2} style={{ width: '500px', height: '500px' }} />
                    <img src={outputTextImage3} style={{ width: '500px', height: '500px' }} />
                </div>
            ) : (
                <p>No Image Yet!!</p>
            )}
        </div>
    );
};

export default TextConverter;
