import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sales";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [Page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    });

    useEffect(() => {
        axios.get(BASE_URL + '/sales?page=0&size=20&sort=date,desc')
            .then(response => {
                setPage(response.data)
            })
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-stripped table-sm">
                <thead>
                    <th>Data</th>
                    <th>Vendedor</th>
                    <th>Clientes visitados</th>
                    <th>Negócios fechados</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                    {Page.content?.map(item => (
                        <tr key={item.id}>
                            <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                            <td>{item.seller.name}</td>
                            <td>{item.visited}</td>
                            <td>{item.deals}</td>
                            <td>{item.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
