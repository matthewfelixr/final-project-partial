import React from 'react'
import Card from '../card/Card'

const Category = () => {
  return (
    <>
    <div className='container'>
        <h5 className='m-1'><b>Telusuri Kategori</b></h5>
        <div className='btn-wrapper d-flex m-1'>
            <button type="button" class="btn btn-primary m-1">Primary</button>
            <button type="button" class="btn btn-primary m-1">Primary</button>
            <button type="button" class="btn btn-primary m-1">Primary</button>
            <button type="button" class="btn btn-primary m-1">Primary</button>
            <button type="button" class="btn btn-primary m-1">Primary</button>
            <button type="button" class="btn btn-primary m-1">Primary</button>
        </div>
        <div className='container'>
            <div class="row row-cols-2 row-cols-lg-6">
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>
                <div class="col mb-4"><Card/></div>

                {/* <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div>
                <div class="col"><Card/></div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Category