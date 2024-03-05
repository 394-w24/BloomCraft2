import Button from './Button'

const GenerateNotePage = ({setNote, setGenerateNoteView}) => {
    const handleSetNote = (note) => {
        setNote(note);
        setGenerateNoteView(false);
    }

    return (
        <div>
            <h1>What would you like to say?</h1>
            <Button onClick={() => handleSetNote("My love for you runs deep, and I can't help but say, 'I love you.'")}>I love you</Button>
            <Button onClick={() => handleSetNote("I deeply regret my actions, especially knowing the depth of my adoration for you.")}>I'm Sorry</Button>
            <Button onClick={() => handleSetNote("I am filled with gratitude for your unwavering support.")}>Thank You</Button>
            <Button onClick={() => handleSetNote("I hope you recover swiftly, surrounded by the love and care you deserve.")}>Get Better Soon</Button>
            <Button onClick={() => handleSetNote("Even in quiet moments, my thoughts are filled with deep caring, just thinking of you.")}>I Was Thinking of You</Button>
        </div>
    )
}

export default GenerateNotePage;