const mongoose = require("mongoose");

const headlineSchema = new mongoose.Schema(
  {
    headline: String,
    photo_url: String,
    photo_s3_id: String,
    photo_source_url: String,
    video_url: String,
    video_s3_id: String,
    video_source_url: String,
    publication: String,
    article_url: String,
    times_correctly_chosen: Number,
    times_incorrectly_chosen: Number,
    bias_attributes: {
      sensationalism_true: Number,
      sensationalism_false: Number,
      sensationalism_neither: Number,
      undue_weight_bias_true: Number,
      undue_weight_bias_false: Number,
      undue_weight_bias_neither: Number,
      speculative_content_true: Number,
      speculative_content_false: Number,
      speculative_content_neither: Number,
      tonality_bias_true: Number,
      tonality_bias_false: Number,
      tonality_bias_neither: Number,
      concision_bias_true: Number,
      concision_bias_false: Number,
      concision_bias_neither: Number,
      coverage_bias_true: Number,
      coverage_bias_false: Number,
      coverage_bias_neither: Number,
      distortion_bias_true: Number,
      distortion_bias_false: Number,
      distortion_bias_neither: Number,
      partisan_bias_true: Number,
      partisan_bias_false: Number,
      partisan_bias_neither: Number,
      favors_or_attacks_true: Number,
      favors_or_attacks_false: Number,
      favors_or_attacks_neither: Number,
      content_bias_true: Number,
      content_bias_false: Number,
      content_bias_neither: Number,
      structural_bias_true: Number,
      structural_bias_false: Number,
      structural_bias_neither: Number,
      gatekeeping_bias_true: Number,
      gatekeeping_bias_false: Number,
      gatekeeping_bias_neither: Number,
      decision_making_bias_true: Number,
      decision_making_bias_false: Number,
      decision_making_bias_neither: Number,
      mainstream_bias_true: Number,
      mainstream_bias_false: Number,
      mainstream_bias_neither: Number,
      false_balance_bias_true: Number,
      false_balance_bias_false: Number,
      false_balance_bias_neither: Number,
    },
  },
  {
    timestamps: true,
  }
);

Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
