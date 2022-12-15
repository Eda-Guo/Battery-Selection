import { DEVICES, TRANSFORMER, FACTOR } from './constants';
import LayoutItem from './LayoutItem';

function Layout({
    items
}) {

    return (
        <div className="content">
            {Object.keys(items).map(name => {
                let currDev = DEVICES.find(device => device.name === name);
                if (currDev) {
                    let currwidth = currDev["width"] * FACTOR;
                    let currheight = currDev["height"] * FACTOR;
                    let count = items[name];
                    let countArr = [];
                    for (let i = 0; i < count; i++) {
                        countArr.push(i);
                    }
                    return (
                        countArr.map(index => {
                            return (
                                <LayoutItem
                                    index={index}
                                    name={name}
                                    displayWidth={currwidth}
                                    displayHeight={currheight}
                                    actualWidth={currDev["width"]}
                                    actualHeight={currDev["height"]}
                                    key={name + index}>
                                </LayoutItem>
                            )
                        }))
                }
                else {
                    let transWidth = TRANSFORMER[0].width * FACTOR;
                    let transHeight = TRANSFORMER[0].height * FACTOR;
                    let count = items.Transformer;
                    let countArr = [];
                    for (let i = 0; i < count; i++) {
                        countArr.push(i);
                    }

                    return (
                        countArr.map(index => {
                            return (
                                <LayoutItem
                                    index={index}
                                    name="Transformer"
                                    displayWidth={transWidth}
                                    displayHeight={transHeight}
                                    actualWidth={TRANSFORMER[0].width}
                                    actualHeight={TRANSFORMER[0].height}
                                    key={name+index}
                                ></LayoutItem>
                            )
                        }))

                }
            }

            )}
        </div>
    );
}

export default Layout;