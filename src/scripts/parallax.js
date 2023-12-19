$(document).ready(function () {
  var $window = $(window);

  $("[data-type]").each(function () {
    $(this).data("offsetY", parseInt($(this).attr("data-offsetY")));
    $(this).data("Xposition", $(this).attr("data-Xposition"));
    $(this).data("speed", $(this).attr("data-speed"));
  });

  $('[data-type="background"]').each(function () {
    var $self = $(this),
      offsetCoords = $self.offset(),
      topOffset = offsetCoords.top,
      bannerHeight = $("#banner").height();

    $(window).scroll(function () {
      var scrollTop = $window.scrollTop();

      if (
        scrollTop + $window.height() > topOffset &&
        topOffset + $self.height() > scrollTop
      ) {
        var yPos = -(scrollTop / $self.data("speed"));

        if ($self.data("offsetY")) {
          yPos += $self.data("offsetY");
        }

        $self.css({ top: yPos });

        $self.css({ opacity: (bannerHeight - scrollTop) / bannerHeight });
      }
    });
  });
});
