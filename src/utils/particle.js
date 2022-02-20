import $ from 'jquery'
class Particle {

    constructor(svg, coordinates, friction) {
        this.svg = svg;
        // this.steps = $(window).height() / 2;
        this.steps = $(window).height() / 2;
        this.item = null;
        this.friction = friction;
        this.coordinates = coordinates;
        this.position = this.coordinates.y;
        this.dimensions = this.render();
        this.rotation = Math.random() > 0.5 ? "-" : "+";
        this.scale = 0.5 + Math.random();
        this.siner = 200 * Math.random();
    }

    destroy() {
        this.item.remove();
    }

    move() {
        this.position = this.position - this.friction;
        let top = this.position;
        let left = this.coordinates.x + Math.sin(this.position * Math.PI / this.steps) * this.siner;
        this.item.css({
            transform: "translateX(" + left + "px) translateY(" + top + "px) scale(" + this.scale + ") rotate(" + this.rotation + (this.position + this.dimensions.height) + "deg)"
        });


        if (this.position < -this.dimensions.height) {
            this.destroy();
            return false;
        } else {
            return true;
        }
    }

    render() {
        this.item = $(this.svg, {
            css: {
                transform: "translateX(" + this.coordinates.x + "px) translateY(" + this.coordinates.y + "px)"
            }
        });


        $(".background").append(this.item);
        return {
            width: this.item.width(),
            height: this.item.height()
        };

    }
}

export default Particle;

