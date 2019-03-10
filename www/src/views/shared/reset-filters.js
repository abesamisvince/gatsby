import React from "react"
import MdClear from "react-icons/lib/md/clear"

import { options, rhythm } from "../../utils/typography"
import presets, { colors, space } from "../../utils/presets"

const ResetFilters = ({ onClick }) => (
  <div css={{ paddingRight: rhythm(space[6]) }}>
    <button
      css={{
        alignItems: `center`,
        background: colors.ui.light,
        border: 0,
        borderRadius: presets.radii[1],
        color: colors.gatsby,
        cursor: `pointer`,
        display: `flex`,
        fontFamily: options.headerFontFamily.join(`,`),
        marginTop: rhythm(space[6]),
        paddingRight: rhythm(space[6]),
        textAlign: `left`,
        "&:hover": {
          background: colors.gatsby,
          color: `#fff`,
        },
      }}
      onClick={onClick}
    >
      <MdClear style={{ marginRight: rhythm(space[1]) }} /> Reset all Filters
    </button>
  </div>
)

export default ResetFilters
