import React from "react";
import { Button } from "@material-tailwind/react";

import { Card, Typography, Select, Option } from "@material-tailwind/react";

import REFRESH_ICON from "../../assets/14_messages/refresh.png";

function index() {
  return (
    // <div>event_planner</div>
    <div className="container mx-auto">
      <section>
        <h2 className="text-[20px] font-semibold mb-6">Message</h2>

        <div className="grid grid-cols-2 border border-[#EDECF1]">
          <div className="border border-[#EDECF1]">
            <div className="grid grid-rows-7  gap-4">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p>All</p>
                    <p>Unread (1)</p>
                  </div>

                  <img
                    src={REFRESH_ICON}
                    alt="aad"
                    className="object-contain W-[16px]"
                  />
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                    <p>May 9</p>
                  </div>

                  <p>Subject: AV Requirements</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                    <p>May 9</p>
                  </div>

                  <p>Subject: AV Requirements</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                  <p>May 9</p>
                </div>

                <p>Subject: AV Requirements</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                  <p>May 9</p>
                </div>

                <p>Subject: AV Requirements</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                  <p>May 9</p>
                </div>

                <p>Subject: AV Requirements</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                  <p>May 9</p>
                </div>

                <p>Subject: AV Requirements</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-rows-3 gap-">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                <p>May 9</p>
              </div>

              <p>Subject: AV Requirements</p>
              <div>
                <h2 className="text-[20px] font-semibold">Holden Cox</h2>
                <p>
                  Question about some of the av requirements listed on the event
                  detail page that did not show
                </p>
              </div>
              <div>
                <p>Write Your Message</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
