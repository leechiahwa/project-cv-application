import { useInfoForm } from "./InfoFormContext"

export default function CvPreview() {
    const { person, setPerson } = useInfoForm();

    return (
        <>
        <p>{person.name}</p>
        </>
    )
}