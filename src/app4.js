import $ from 'jquery'
import './app4.css'

const $circle = $('#app4 .circle')

$circle.on('mouseover',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})