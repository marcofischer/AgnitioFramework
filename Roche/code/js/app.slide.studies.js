document.addEventListener('presentationInit', function() {
    var prefix = util.getBrowserPrefix("Transform");
    var slide = app.slide.studies = {
        elements: {
            horiLine: '#hori_dash',
            vertLine: '#vert_dash',
            notPlaceboBar: '#not_placebo_bar',
            notPlaceboBarText: '.np-bar-text',
            placeboBar: '#placebo_bar',
            placeboBarText: '.p-bar-text',
            popBox12: '#pop_box_x12',
            popBox24: '#pop_box_x24',
            hPole: '#hpole',
            dragY: '#y_drag',
            dragX: '#x_drag',
            smallGraph: '#y_small',
            smallYText: '#small_y_text',
            y50state: '#y50',
            x12or24state: '#xActive'
        },
        onEnter:function(ele){
            slide.element.ys_for_x_Placebo = [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 9, 9, 9, 9, 14, 14, 14, 14, 14, 20, 20, 20, 20, 20, 24, 24, 24, 27, 27, 27, 27, 35, 35, 35, 35, 39, 43, 43, 43, 49, 49, 52, 52, 52, 52, 55, 55, 55, 58, 58, 58, 62, 62, 66, 66, 66, 66, 66, 66, 70, 70, 72, 72, 72, 77, 77, 77, 80, 80, 84, 84, 91, 91, 91, 91, 93, 97, 97, 97, 97, 108, 108, 108, 108, 108, 108, 110, 110, 110, 118, 118, 122, 122, 122, 122, 126, 126, 126, 130, 130, 130, 132, 132, 135, 135, 135, 135, 139, 139, 144, 144, 144, 146, 146, 146, 149, 149, 149, 149, 152, 152, 152, 152, 157, 157, 157, 157, 160, 160, 160, 160, 163, 163, 163, 163, 168, 168, 168, 168, 168, 168, 168, 168, 173, 173, 173, 173, 175, 175, 175, 180, 180, 180, 183, 183, 183, 186, 186, 186, 186, 188, 188, 188, 191, 191, 191, 192, 194, 196, 196, 196, 196, 196, 196, 196, 199, 199, 200, 200, 200, 204, 204, 204, 206, 206, 206, 206, 206, 206, 210, 211, 212, 212, 212, 212, 212, 212, 212, 212, 215, 215, 215, 215, 215, 215, 215, 215, 217, 218, 218, 220, 220, 220, 220, 220, 220, 224, 224, 224, 224, 229, 229, 229, 229, 229, 229, 229, 229, 229, 234, 234, 234, 234, 234, 234, 234, 236, 236, 236, 236, 236, 236, 236, 236, 236, 236, 237, 237, 237, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 244, 244, 244, 244, 246, 246, 246, 250, 250, 250, 250, 250, 253, 253, 253, 253, 253, 253, 253, 255, 255, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 265, 270, 270, 270, 270, 270, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 274, 280, 280, 280, 280, 280, 280, 280, 280, 280, 280, 280, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291, 291];
            slide.element.ys_for_x_notPlacebo = [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9, 9, 9, 9, 9, 14, 14, 14, 14, 14, 14, 18, 18, 18, 18, 18, 18, 21, 21, 21, 22, 24, 24, 24, 24, 24, 24, 24, 24, 26, 27, 29, 30, 32, 33, 35, 35, 35, 35, 35, 35, 35, 35, 35, 37, 38, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 46, 46, 46, 46, 46, 47, 49, 51, 51, 51, 53, 55, 57, 59, 61, 63, 64, 65, 65, 65, 66, 67, 68, 70, 70, 71, 72, 73, 75, 76, 76, 76, 76, 76, 77, 81, 82, 82, 85, 85, 85, 89, 89, 89, 96, 97, 98, 99, 101, 102, 103, 104, 105, 105, 108, 108, 108, 108, 112, 112, 112, 120, 120, 120, 120, 121, 121, 122, 122, 122, 124, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 136, 136, 136, 137, 137, 138, 138, 139, 145, 145, 145, 145, 145, 146, 148, 150, 150, 150, 150, 153, 153, 153, 153, 153, 153, 153, 153, 153, 155, 155, 155, 156, 156, 157, 157, 158, 163, 163, 164, 164, 165, 168, 168, 169, 169, 169, 170, 170, 170, 174, 174, 174, 175, 182, 183, 183, 183, 183, 183, 183, 184, 184, 185, 186, 187, 187, 187, 187, 187, 187, 187, 188, 188, 188, 188, 188, 189, 190, 191, 192, 192, 192, 192, 194, 194, 194, 197, 197, 197, 197, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 202, 202, 202, 204, 204, 204, 207, 207, 208, 208, 208, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 214, 214, 214, 214, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 217, 221, 221, 221, 221, 221, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 227, 227, 227, 228, 228, 228, 228, 228, 228, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234, 236, 236, 236, 236, 236, 236, 236, 236, 239, 239, 239, 239, 239, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 247, 247, 247, 247, 247, 247, 252, 252, 252, 252, 257, 257, 257, 257, 257, 257, 257, 257, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 263, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269, 269];
            slide.element.xs_for_y_Placebo = [0, 0, 6, 6, 6, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 33, 33, 33, 37, 37, 37, 37, 37, 37, 37, 37, 41, 41, 41, 41, 42, 42, 42, 42, 45, 45, 45, 45, 45, 45, 47, 47, 47, 51, 51, 51, 54, 54, 54, 57, 57, 57, 57, 59, 59, 59, 59, 65, 65, 65, 65, 67, 67, 70, 70, 70, 70, 70, 73, 73, 73, 75, 75, 75, 75, 77, 77, 77, 77, 77, 77, 77, 81, 81, 82, 82, 82, 82, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 92, 92, 95, 95, 95, 95, 95, 95, 95, 95, 97, 97, 97, 97, 101, 101, 101, 101, 104, 104, 104, 104, 107, 107, 109, 109, 109, 113, 113, 113, 113, 115, 115, 115, 115, 115, 118, 118, 121, 121, 121, 125, 125, 125, 129, 129, 129, 129, 129, 133, 133, 133, 137, 137, 137, 141, 141, 141, 141, 141, 149, 149, 149, 149, 149, 153, 153, 156, 156, 156, 156, 156, 159, 159, 159, 162, 162, 162, 166, 166, 169, 169, 169, 172, 173, 174, 174, 174, 181, 181, 181, 183, 186, 186, 186, 187, 189, 189, 195, 195, 195, 196, 196, 198, 205, 205, 205, 213, 213, 214, 216, 216, 222, 222, 222, 222, 226, 226, 226, 226, 226, 235, 235, 235, 235, 235, 242, 242, 252, 255, 255, 255, 255, 255, 255, 265, 269, 269, 272, 272, 272, 272, 277, 277, 277, 284, 284, 286, 286, 286, 306, 306, 306, 306, 321, 321, 321, 339, 339, 339, 339, 339, 344, 344, 344, 344];
            slide.element.xs_for_y_notPlacebo = [0, 0, 6, 6, 6, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 26, 26, 26, 26, 32, 32, 32, 36, 36, 36, 45, 45, 46, 46, 47, 48, 48, 49, 50, 50, 51, 59, 60, 61, 61, 62, 63, 65, 67, 69, 71, 73, 80, 80, 81, 81, 82, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 89, 90, 91, 92, 95, 96, 97, 98, 99, 100, 101, 102, 102, 103, 104, 108, 109, 109, 109, 109, 111, 112, 112, 112, 115, 115, 115, 115, 118, 118, 118, 118, 118, 118, 119, 120, 121, 122, 122, 123, 124, 125, 126, 127, 127, 127, 127, 127, 132, 132, 132, 135, 135, 135, 135, 135, 135, 135, 135, 140, 143, 144, 145, 145, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 159, 161, 163, 163, 163, 163, 163, 163, 163, 168, 169, 170, 170, 171, 174, 174, 174, 183, 183, 183, 189, 191, 191, 191, 191, 191, 191, 194, 196, 196, 196, 197, 199, 202, 204, 204, 204, 204, 208, 208, 208, 208, 208, 208, 208, 208, 209, 217, 218, 219, 221, 227, 232, 233, 234, 235, 238, 238, 241, 241, 241, 245, 245, 257, 257, 257, 260, 260, 263, 263, 263, 265, 268, 268, 268, 278, 278, 278, 282, 282, 282, 283, 293, 293, 293, 298, 298, 315, 315, 315, 315, 318, 324, 324, 325, 347, 347, 347, 365, 365, 373, 373, 373, 378, 378, 378, 378, 405, 405, 405, 405, 411, 411, 411, 411, 411, 415, 415, 415, 415, 415, 423, 423, 423, 423, 423, 423, 473, 473, 473, 473, 473, 473];
            slide.y50active = true;
            slide.x12or24 = false;
            slide.axis = 'y';

            // Draggy elements (x and y draggable elements)
            // Note: is using global ids -> can't have two of this slide in the DOM at the same time
            slide.yDrag = new Draggy('y_drag', {onChange: slide.onYdrag, restrictX: true, limitsY: [-150, 146]});
            slide.xDrag = new Draggy('x_drag', {onChange: slide.onXdrag, restrictY: true, limitsX: [0, 520]});

            app.addEvent(touchy.events.start, slide.changeSmallGraphY, slide.element.dragY);
            app.addEvent(touchy.events.start, slide.changeSmallGraphX, slide.element.dragX);
        },
        onExit:function(ele){
            slide.resetGraph();
            slide.yDrag = null;
            slide.xDrag = null;
        },
        resetGraph: function() {
            slide.yDrag.reset();
            slide.xDrag.reset();
            // Resetting graph elements and state
            slide.axis = 'y';
            slide.element.y50state.style.display = 'block';
            slide.element.vertLine.style.opacity = '0';
            slide.element.horiLine.style.cssText = 'opacity:1;' + prefix + 'transform:translate(0, 0);';
            slide.element.notPlaceboBar.style.height = '';
            slide.element.placeboBar.style.height = '';
            slide.element.notPlaceboBarText.innerHTML = '10.3';
            slide.element.placeboBarText.innerHTML = '14.2';
            slide.element.x12or24state.style.display = 'none';
            slide.element.popBox12.style.opacity = '0';
            slide.element.popBox24.style.opacity = '0';
            slide.y50active = true;
            slide.x12or24 = false;
            slide.element.smallYText.innerHTML = 'Minutes';
        },
        onYdrag: function(x,y) {
            var yFromTop;
            // See if we are at 50% (+- 5), and display data and elements if we are
            if (y < 5 && y > -5) {
                y = 0;
                if (!slide.y50active) {
                    slide.element.y50state.style.display = 'block';
                    slide.element.notPlaceboBarText.innerHTML = '10.3';
                    slide.element.placeboBarText.innerHTML = '14.2';
                    slide.y50active = true;
                }
            }
            // else if we are coming from 50%, hide data and elements
            else if (slide.y50active) {
                slide.element.y50state.style.display = 'none';
                slide.element.notPlaceboBarText.innerHTML = '';
                slide.element.placeboBarText.innerHTML = '';
                slide.y50active = false;
            }

            // Move the horizontal dashed line together with the hand
            slide.element.horiLine.style.cssText = 'opacity:1;' + prefix + 'transform:translate(0,' + y + 'px);';

            yFromTop = y + 150; // Conversion so that y starts from top of the axis

            // Calculate the size of the bars using variables at the top
            slide.element.notPlaceboBar.style.height = (slide.element.xs_for_y_Placebo[yFromTop] / 142 * 12 * 200 / 4 / 12) + 'px';
            slide.element.placeboBar.style.height = (slide.element.xs_for_y_notPlacebo[yFromTop] / 142 * 12 * 200 / 4 / 12) + 'px';

            // If x is active axis, inactivate it and hide elements
            if (slide.axis === 'x') {
                slide.element.vertLine.style.opacity = '0';
                if (slide.x12or24) {
                    slide.element.notPlaceboBarText.innerHTML = '';
                    slide.element.placeboBarText.innerHTML = '';
                    slide.element.x12or24state.style.display = 'none';
                    slide.element.popBox12.style.opacity = '0';
                    slide.element.popBox24.style.opacity = '0';
                    slide.x12or24 = false;
                }
                slide.axis = 'y';
            }
        },
        onXdrag: function(x,y) {
            // See if we are at 12 months, if so display data and elements
            if (x < 152 && x > 143) {
                x = 147;
                if (!slide.x12or24) {
                    slide.element.x12or24state.style.display = 'block';
                    slide.element.popBox12.style.opacity = '1';
                    slide.element.popBox24.style.opacity = '0';
                    slide.element.notPlaceboBarText.innerHTML = '43.3%';
                    slide.element.placeboBarText.innerHTML = '56.5%';
                    slide.element.hPole.setAttribute('class', '');
                    slide.x12or24 = true;
                }
            }
            // See if we are at 24 months, if so display data and elements
            else if (x < 298 && x > 288) {
                x = 293;
                if (!slide.x12or24) {
                    slide.element.x12or24state.style.display = 'block';
                    slide.element.popBox12.style.opacity = '0';
                    slide.element.popBox24.style.opacity = '1';
                    slide.element.notPlaceboBarText.innerHTML = '16.8%';
                    slide.element.placeboBarText.innerHTML = '27.1%';
                    slide.element.hPole.setAttribute('class', 'xAt24');
                    slide.x12or24 = true;
                }
            }
            // else if we are coming from 12 or 24 months, hide data and elements
            else if (slide.x12or24) {
                slide.element.x12or24state.style.display = 'none';
                slide.element.popBox12.style.opacity = '0';
                slide.element.popBox24.style.opacity = '0';
                slide.element.notPlaceboBarText.innerHTML = '';
                slide.element.placeboBarText.innerHTML = '';
                slide.element.hPole.setAttribute('class', '');
                slide.x12or24 = false;
            }

            // Move the vertical dashed line together with the hand
            slide.element.vertLine.style.cssText = 'opacity:1;' + prefix + 'transform:translate(' + x + 'px, 0);';

            // Calculate the size of the bars using variables at the top
            slide.element.notPlaceboBar.style.height = (100 - slide.element.ys_for_x_Placebo[x] * 100 / 300) * 2 + "px";
            slide.element.placeboBar.style.height = (100 - slide.element.ys_for_x_notPlacebo[x] * 100 / 300) * 2 + "px";

            // If y is active axis, inactivate it and hide elements
            if (slide.axis === 'y') {
                slide.element.horiLine.style.opacity = '0';
                if (slide.y50active) {
                    slide.element.y50state.style.display = 'none';
                    slide.element.notPlaceboBarText.innerHTML = '';
                    slide.element.placeboBarText.innerHTML = '';
                    slide.y50active = false;
                }
                slide.axis = 'x';
            }
        },
        changeSmallGraphY: function(e){
            util.removeClass(slide.element.smallGraph,'active');
            slide.element.smallYText.innerHTML = 'Minutes';
        },
        changeSmallGraphX: function(e){
            util.addClass(slide.element.smallGraph,'active');
            slide.element.smallYText.innerHTML = 'Disease relief (%)';
        }
    };  
}); 