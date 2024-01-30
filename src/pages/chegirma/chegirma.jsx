import React from 'react'
import img1 from '../../assets/chegirma_image1.svg'
// import img2 from '../../assets/chegirma_image2.svg'
// import img4 from '../../assets/chegirma_image4.svg'

export const Chegirma = () => {
    try {
        return <div className="chegirma-card">
                    <div className="img"> <img src={img1} alt="" /> </div>
                    <h3>Говядина, кусок c/к</h3>
                    <p className='p'>Свинина, смесь посолочная <br /> (соль, нитрит натрия), коньяк, <br /> натуральные специи, caxap.</p>
                    <p className='oldPrice p'>500 ₽</p>
                    <div className="price-div">
                        <s>660 ₽</s>
                        <div className="foiz">
                            <p>-15%</p>
                            <p>Экономия 160 ₽</p>
                        </div>
                    </div>
                    <div className="chegirma-card-btns">
                        <button className="btn1">Купить</button>
                        <button className="btn2">B 1 клик</button>
                    </div>
            </div>
    } catch (e) { console.log(e); }
}
