package main

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"time"
)

func main() {
	open, f, err := zap.Open("test.log")
	if err != nil {
		return
	}
	defer f()

	logger, _ := zap.NewProduction(zap.Fields(zap.String("service", "service")), zap.WrapCore(func(core zapcore.Core) zapcore.Core {
		return zapcore.NewTee(core, zapcore.NewCore(
			zapcore.NewJSONEncoder(zap.NewProductionEncoderConfig()),
			zapcore.Lock(zapcore.AddSync(open)),
			zapcore.DebugLevel,
		))
	}))
	defer logger.Sync() // flushes buffer, if any
	sugar := logger.Sugar()
	sugar.Infow("failed to fetch URL",
		// Structured context as loosely typed key-value pairs.
		"url", "url",
		"attempt", 3,
		"backoff", time.Second,
	)
	sugar.Infof("Failed to fetch URL: %s", "url")
	sugar.Info("Failed to fetch URL", "url", "url")

	logger1, _ := zap.NewProduction()
	defer logger.Sync()
	logger1.Info("failed to fetch URL",
		// Structured context as strongly typed Field values.,
		zap.String("url", "url"),
		zap.Int("attempt", 3),
		zap.Duration("backoff", time.Second),
	)
}
