function BirthdayCard({ name, dob, tithi}) {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{name}</h2>
            <p>DOB: {dob}</p>
            <p>Hindu Thithi: {tithi}</p>
        </div>
    )
}

export default BirthdayCard;