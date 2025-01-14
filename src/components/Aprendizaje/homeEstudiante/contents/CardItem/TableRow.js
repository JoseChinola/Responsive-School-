

const TableRow = ({ number, code, name, credit, professor, schedule, description, isVirtual }) => {

    const virtualStyle = isVirtual ? { color: '#8b651c' } : { color: '#007500'};
    const encounterText = isVirtual
        ? `ENCUENTROS PLATAFORMA`
        : `ENCUENTROS PRESENCIALES`;

    return (
        <tr>
            <th>{number}</th>
            <td>{code}</td>
            <td>
                {name}
                <br />
                <span className={`badge ${isVirtual ? 'badge-warning' : 'badge-success'}`}>
                    <small className="font-bold">{encounterText}:</small> {schedule}
                </span>
                <br />
                <em style={virtualStyle} className="description-type">
                    {description}
                </em>
            </td>
            <td>{credit}</td>
            <td><span className="font-bold">{professor}</span></td>
        </tr>
    );
};



export default TableRow;
