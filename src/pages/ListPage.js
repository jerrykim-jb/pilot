import axios from "axios";
import { useEffect, useState } from "react";

export const API_SERVER_HOST = 'http://localhost:8080'

const kyungnamsijang = 'https://apis.data.go.kr/6480000/gyeongnammarket/gyeongnammarketList?ServiceKey=&pageNo=1&numOfRows=10&resultType=json'

const prefix = `${API_SERVER_HOST}/api`

const GetList = async (pageNum) => {

    const res = await axios.get(`${kyungnamsijang}`, {})
    return res.data
}

const ListComponent = () => {

    const [sdata, setSdata] = useState([]);


    useEffect(() => {
        GetList().then(data => {
            setSdata(data.gyeongnammarketList.body.items.item)
        })


    }, [])

    return (
        <div>ListComponent
        {
            sdata.map(sitem =>

                <div>{sitem.title}</div>
            )
        }   
        </div>
    )

}

const ListPage = () => {


    return (
        <div className="text-3xl ">
            <div>List Page</div>

            <ListComponent />
        </div>

    )
}

export default ListPage;