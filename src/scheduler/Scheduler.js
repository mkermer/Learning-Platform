import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";
import './Scheduler.css';

class Scheduler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: "2021-02-01",
            days: 14,
            scale: "Day",
            timeHeaders: [
                { groupBy: "Month"},
                { groupBy: "Day", format: "d"}
            ],
            cellWidthSpec: "Auto",
            cellWidth: 20,
            resources: [
                {name: "08:00-10:00", id: "A"},
                {name: "10:00-12:00", id: "B"},
                {name: "12:00-14:00", id: "C"},
                {name: "14:00-16:00", id: "D"},
                {name: "16:00-18:00", id: "E"},
                {name: "18:00-20:00", id: "F"},
                {name: "20:00-22:00", id: "G"},
                {name: "22:00-00:00", id: "H"},
                {name: "00:00-02:00", id: "I"},
                {name: "02:00-04:00", id: "J"},
                {name: "04:00-06:00", id: "K"},
                {name: "06:00-08:00", id: "L"}
                
            ],
            events: [
                {id: 1, text: "Event 1", start: "2021-02-10T00:00:00", end: "2021-02-05T00:00:00", resource: "A" },
                {id: 2, text: "Event 2", start: "2021-02-11T00:00:00", end: "2021-02-10T00:00:00", resource: "C", barColor: "#38761d", barBackColor: "#93c47d" },
                {id: 3, text: "Event 3", start: "2021-02-12T00:00:00", end: "2021-02-08T00:00:00", resource: "D", barColor: "#f1c232", barBackColor: "#f1c232" },
                {id: 4, text: "Event 3", start: "2021-02-13T00:00:00", end: "2021-02-08T00:00:00", resource: "E", barColor: "#cc0000", barBackColor: "#ea9999" }
            ]
        };
    }

    zoomChange(args) {
        switch (args.level) {
            case "month":
                this.setState({
                    startDate: new DayPilot.Date("2021-02-10").firstDayOfMonth(),
                    days: new DayPilot.Date("2021-02-10").daysInMonth(),
                    scale: "Day"
                });
                break;
            case "week":
                this.setState({
                    startDate: new DayPilot.Date("2021-02-10").firstDayOfWeek(),
                    days: 7,
                    scale: "Day"
                });
                break;
            default:
                throw new Error("Invalid zoom level");
        }
    }

    cellWidthChange(ev) {
        var checked = ev.target.checked;
        this.setState({
            cellWidthSpec: checked ? "auto" : "Fixed"
        });
    }

    render() {
        var {...config} = this.state;
        return (
            <div className="whatever">
            <div>

                <div className="toolbar">
                    <Zoom onChange={args => this.zoomChange(args)} />
                    <span className="toolbar-item"><label><input type="checkbox" checked={this.state.cellWidthSpec === "Auto"} onChange={ev => this.cellWidthChange(ev)} /> Auto </label></span>
                </div>

                <DayPilotScheduler
                  {...config}
                  onEventMoved={args => {
                      console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                      this.scheduler.message("Event moved: " + args.e.data.text);
                  }}
                  onEventResized={args => {
                      console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
                      this.scheduler.message("Event resized: " + args.e.data.text);
                  }}
                  onTimeRangeSelected={args => {
                    DayPilot.Modal.prompt("New event name", "Event").then(modal => {
                      this.scheduler.clearSelection();
                      if (!modal.result) {
                        return;
                      }
                      this.scheduler.events.add({
                        id: DayPilot.guid(),
                        text: modal.result,
                        start: args.start,
                        end: args.end,
                        resource: args.resource
                      });
                    });
                  }}
                  ref={component => { this.scheduler = component && component.control; }}
                />
            </div>
            </div>
        );
    }
}

export default Scheduler;
