// 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
import * as React from 'react';

const API_KEY = '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';

interface TextConverterProps {}

const TextConverter: React.FC<TextConverterProps> = () => {
    const [inputText, setInputText] = React.useState('');
    const [outputText, setOutputText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const { Configuration, OpenAIApi } = require('openai');
            const configuration = new Configuration({
                apiKey: API_KEY
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `Kan je deze e-mail netter en meer professioneel maken in correct grammaticaal nederlands en aanheffing: "${inputText}"?`,
                temperature: 0.5,
                max_tokens: 1000
            });
            setOutputText(response.data.choices[0].text);
            console.log(response);
        } catch (error) {
            console.log('text-davinci-003 isnt working, trying text-ada-001');

            try {
                const { Configuration, OpenAIApi } = require('openai');
                const configuration = new Configuration({
                    apiKey: API_KEY
                });
                const openai = new OpenAIApi(configuration);
                const response = await openai.createCompletion({
                    model: 'text-ada-001',
                    prompt: `Kan je deze e-mail netter en meer professioneel maken in correct grammaticaal nederlands en aanheffing: "${inputText}"?`,
                    temperature: 0.5,
                    max_tokens: 1000
                });
                setOutputText(response.data.choices[0].text);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Input Text:
                    <input style={{ width: '100%' }} type="text" value={inputText} onChange={handleChange} />
                </label>
                <input type="submit" value="Convert" />
            </form>

            {outputText ? (
                <div>
                    <p style={{ whiteSpace: 'pre-line' }}>{outputText}</p>
                </div>
            ) : (
                <p>No Text Yet!!</p>
            )}
        </div>
    );
};

export default TextConverter;
