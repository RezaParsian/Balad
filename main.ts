import axios from 'axios';
import {Contact, Field, PlaceInfo, PlaceList} from "./Util/Types";

async function getPlaceToken(region: string, category: string, page: number): Promise<PlaceList | void> {
    return await axios.get('https://search.raah.ir/v4/placeslist/cat/', {
        params: {
            region,
            name: category,
            page
        }
    })
        .then(response => {
            let data: PlaceList = response.data;
            return data;
        })
        .catch(console.log)
}

async function getPlaceInfoByToken(token: string): Promise<PlaceInfo | void> {
    return await axios.get('https://poi.raah.ir/web/v4/' + token)
        .then(response => {
            let data: PlaceInfo = response.data;

            return data;
        })
        .catch(console.log)
}

(async () => {
    let data = await getPlaceToken('city-khomeini-shahr', 'shopping-mall', 1);
    let contacts: Contact[] = [];

    if (!data)
        return;

    for (let token of data.items) {
        let placeInfo = await getPlaceInfoByToken(token);

        if (!placeInfo)
            continue;

            contacts.push({
                token:token,
                name: placeInfo.name,
                phone: placeInfo.fields.filter(filed => {
                    if (!filed.text)
                        return ;

                    let regex=/^09\d+$/g
                    return (filed.text as string).match(regex);
                }).map((field: Field) => {
                    return field.text
                }) as string[]
            })

        new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(contacts.filter(item=> item.phone.length>0));
})();