var TARGET_TRACK_NUMBER = 1;

function getClientInfo() {
    return {
        "name": "Toggle Mute Track " + TARGET_TRACK_NUMBER,
        "author": "peropero1111",
        "versionNumber": 6,
        "minEditorVersion": 65537
    };
}

function getTrackDisplayOrder(track) {
    try {
        if (typeof track.getDisplayOrder == "function") {
            return track.getDisplayOrder();
        }
    } catch (e) {
    }
    return null;
}

function getTrackByNumber(project, trackNumber) {
    var numTracks = project.getNumTracks();
    var tracks = [];
    var minDisplayOrder = null;
    var i;
    var track;
    var displayOrder;

    for (i = 0; i < numTracks; i++) {
        track = project.getTrack(i);
        displayOrder = getTrackDisplayOrder(track);
        if (displayOrder != null) {
            tracks.push({ "track": track, "displayOrder": displayOrder });
            if (minDisplayOrder == null || displayOrder < minDisplayOrder) {
                minDisplayOrder = displayOrder;
            }
        }
    }

    if (tracks.length == numTracks && minDisplayOrder != null) {
        for (i = 0; i < tracks.length; i++) {
            if (tracks[i].displayOrder - minDisplayOrder + 1 == trackNumber) {
                return tracks[i].track;
            }
        }
    }

    if (trackNumber >= 1 && trackNumber <= project.getNumTracks()) {
        return project.getTrack(trackNumber - 1);
    }

    return null;
}

function toggleTrackMute(trackNumber) {
    var project = SV.getProject();
    var track = getTrackByNumber(project, trackNumber);
    var mixer;

    if (track == null) {
        SV.showMessageBox("Toggle Mute Track", "Track " + trackNumber + " does not exist.");
        return;
    }

    mixer = track.getMixer();
    mixer.setMuted(!mixer.isMuted());
}

function main() {
    toggleTrackMute(TARGET_TRACK_NUMBER);
    SV.finish();
}
