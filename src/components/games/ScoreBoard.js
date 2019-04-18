import React from 'react'
import PropTypes from 'prop-types'
import { Button, Box, Column } from 'gestalt'

const propTypes = {
  score: PropTypes.func.isRequired
}

export default function ScoreBoard ({ score }) {
  return (
    <div className="scoreboard">
      <Box margin={1}>
        <Button onClick={() => score('M')} text={'Miss'} />
      </Box>
      {
        [...Array(20)].map((_, i) => (
          <Box key={i} display="flex" direction="row">
            <Column span={4}>
              <Box margin={1}>
                <Button onClick={() => score(`S${i + 1}`)} text={`S${i + 1}`} />
              </Box>
            </Column>
            <Column span={4}>
              <Box margin={1}>
                <Button onClick={() => score(`D${i + 1}`)} text={`D${i + 1}`} />
              </Box>
            </Column>
            <Column span={4}>
              <Box margin={1}>
                <Button onClick={() => score(`T${i + 1}`)} text={`T${i + 1}`} />
              </Box>
            </Column>
          </Box>
        ))
      }
      <Box display="flex" direction="row">
        <Column span={6}>
          <Box margin={1}>
            <Button onClick={() => score('SB')} text={'Bull'} />
          </Box>
        </Column>
        <Column span={6}>
          <Box margin={1}>
            <Button onClick={() => score('DB')} text={'Double Bull'} />
          </Box>
        </Column>
      </Box>
    </div>
  )
}

ScoreBoard.propTypes = propTypes
