share.MeetingEditor = new share.Editor(
  collection: share.Meetings
  family: "meeting"
  isSingleLine: (property) ->
    property in ["name"]
)
share.SakEditor = new share.Editor(
  collection: share.Saker
  family: "sak"
)
share.TalkEditor = new share.Editor(
  collection: share.Talks
  family: "talk"
)
share.ReplyEditor = new share.Editor(
  collection: share.Replies
  family: "reply"
)