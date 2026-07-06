import React from "react";
import { FeatureTableData } from "./data";

interface Props {
  data: FeatureTableData;
}

const FeatureTableSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-10 lg:px-40">
      <div className="mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            How RCS is better?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto subheading">
            RCS is better than SMS because it supports rich features like media sharing, read receipts, and real-time messaging over the internet.
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto border border-gray-300 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f7f7f7]">
                {data.columns.map((col, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-lg font-medium text-gray-900 border border-gray-300"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 border border-gray-300 font-medium">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-gray-700">
                    {row.description}
                  </td>
                  <td className="px-4 py-3 border border-gray-300 text-gray-700">
                    {row.benefit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default FeatureTableSection;