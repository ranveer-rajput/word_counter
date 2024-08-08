
export default function Box({ label1,lable2 }) {
    return <div style={{ border: '1px solid gray', width: '120px', height: '60px', marginLeft: "10px", display:"flex",justifyContent: 'center', textAlign:"center"  }}>
        {label1}
        <br />
        {lable2}
    </div>
}