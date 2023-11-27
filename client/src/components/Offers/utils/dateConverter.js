export default function dateConverter(givenDate) {
    const d = new Date(givenDate);
    return d.toDateString()
}