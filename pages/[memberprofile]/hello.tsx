export default function Hello() {
    return (
        <h1>hello</h1>
    )
}

export const getServerSideProps = () => {
    console.log('coming in getServerside props')
    return {
        hello: 'true'
    }
}