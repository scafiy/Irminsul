import Link from 'next/link'
import ItemCSS from '@/css/item.module.css'

export default function Item(props) {
    const category = props.category
    const src = props.src
    const name = props.name
    const element = props.element
    
    return (
        <div className={ItemCSS.item + ` waves-effect waves-light ripple ` + ` item `}>
            
            <Link href={`/characters/${name.toLowerCase().replaceAll(" ", "-")}`}>

                { category === "character" ? <img className={ItemCSS.itemCategory} src={`https://raw.githubusercontent.com/scafiy/Irminsul/master/src/assets/icons/${element.toLowerCase()}.png`}/> : null}
                
                <div className={ItemCSS.itemIcon + ` bg-${props.rarity}-star`}>
                    <img src={src} className={ItemCSS.itemImg} alt=" "/>
                </div>

                <p className={ItemCSS.itemText} style={{ fontSize: category === "weapon" ? "12px" : "inherit" }}>{name}</p>
            </Link>

        </div>
    )
}