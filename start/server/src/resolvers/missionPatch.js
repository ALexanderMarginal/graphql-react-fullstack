module.exports = (mission, {size} = {size: 'LARGE'}) => {
    return size === 'SMALL'
        ? mission.missionPatchSmall
        : mission.missionPatchLarge;
};
